---
layout: default
title: IPE Method
---

# Iterative Parameter Estimation (IPE)

## Overview
The Iterative Parameter Estimation (IPE) method is very similar to the Rank Preserving Structural Failure Time (RPSFT) Model. Both methods are based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred. As RPSFT, IPE also assumes a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. However, the two methods differ in how the accelerated parameter $\psi$ is estimated: the IPE method iteratively fits a parametric survival model until the estimate of $\psi$ converges whereas RPSFT uses g-estimation to find the optimal value of $\psi$. Similar to RPSFT, IPE also does not inherently require covariate information, which is different from some other adjustment methods such as IPCW or Two-Stage Estimation.

## Model Assumptions
- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment. This strong assumption can be relaxed by introducing a `treat effect modifier` parameter to specify the relative effect of the treatment received at switching vs the treatment received at randomization. This effect modifier is implemented via multiplying $\psi$.

- The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).

## Model Details
IPE adjusts for the effects of treatment switching by modeling what the survival times of patients who switched treatments would have been if they had remained on the control treatment. The model assumes that the treatment effect is the same regardless of when the patient received the treatment. 

As in RPSFT, IPE perserves the relative ordering of counterfactural survival times under the experimental treatment in the relative ordering of counterfactural survival times under the control treatment. Formally, let $Y_i^{a=1}$ represent the potential outcome for subject $i$ under treatment condition $a=1$ (experimental), and $Y_i^{a=0}$ represent the potential outcome under treatment condition $a=0$ (control). If the ranking of $\{Y_i^{a=1}: i=1,\ldots,n\}$ is identical to the ranking of $\{Y_i^{a=0}: i=1,\ldots,n\}$, we say that rank preservation holds. 

The structural failure time model refers to a framework used to estimate the true (unobserved) survival time in the absence of treatment switching, assuming that the experimental treatment has a multiplicative effect on survival. Specifically, each patient's observed survival time, $T_i$, is divided into the time spent on the control treatment, $T_{C_i}$, and the time spent on the experimental treatment, $T_{E_i}$, such that $T_i = T_{C_i} + T_{E_i}$. The `rx` parameter in the `rpsftm` function represents the proportion of time spent on the experimental treatment, defined as the ratio $T_{E_i}/T_i$. The structural model for counterfactual untreated survival times is expressed as
$$U_{i,\psi} = T_{C_i} + e^{\psi} T_{E_i},$$
where there are three distinct cases for one-way treatment switching from the control arm to the experimental arm:

- **Experimental Group Patients**: $T_{C_i} = 0$, and $T_{E_i}$ represents the time from randomization to either death or censoring. 

- **Control Group Nonswitchers**: $T_{C_i}$ is the time from randomization to either death or censoring, and $T_{E_i} = 0$. 

- **Control Group Switchers**: $T_{C_i}$ is the time from randomization to treatment switch, and $T_{E_i}$ is the time from the switch to either death or censoring.


## Estimation of $\psi$

With an initial estimate of $\psi$ from the intention-to-treat (ITT) analysis using an accelerated failure time (AFT) model to compare the randomized treatment groups, the IPE method iterates between the following two steps until convergence: 

1. Derive the counterfactual survival times and event indicators (possibly recensored) for patients in the control group, 

$$ U_{i,\psi} = T_{C_i} + e^{\psi} T_{E_i} $$

$$ D_{i,\psi}^* = \min(C_i, e^{\psi} C_i) $$

$$ U_{i,\psi}^* = \min(U_{i,\psi}, D_{i,\psi}^*) $$

$$ \Delta_{i,\psi}^* = I(U_{i,\psi} \leq D_{i,\psi}^*)$$

2. Fit an AFT model to the adjusted data set consisting of 

    - The observed survival times of the experimental group:  $\{(T_i,\Delta_i,Z_i): A_i = 1\}$

    - The counterfactual survival times for the control group:  $\{(U_{i,\psi}^* , \Delta_{i,\psi}^* , Z_i): A_i = 0\}$ evaluated at 
$\psi = \hat{\psi}$.

The updated estimate of $\psi$ is equal to the negative of the regression coefficient for the treatment indicator in the AFT model.

## Estimation of Counterfactual Treatment Effect

This step is the same as the RPSFT method. Once $\psi$ has been estimated, we can fit a (optionally stratified) Cox proportional hazards model to the adjusted data set. This allows us to obtain an estimate of the hazard ratio. The confidence interval for the hazard ratio can be derived by either 

1. Matching the p-value from the log-rank test for an ITT analysis, or
2. Bootstrapping the entire adjustment and subsequent model-fitting process. 

## Recensoring
Similar to RPSFT, recensoring is an important component in IPE. The censoring time $C_i$ must be defined for all patients including those who experience an event. We assume that censoring is non-informative in the absence of treatment switching, i.e., $T_{L_i} \perp\perp C_i$, where $T_{L_i}$ denotes the latent time to event for subject $i$. 

The observed time to event or censoring is given by 
$$T_i = \min(T_{C_i} + e^{-\psi}(T_{L_i} - T_{C_i}), C_i)$$ 
with the event indicator
$$\Delta_{i} = I(T_{C_i} + e^{-\psi}(T_{L_i} - T_{C_i})\leq C_i)$$
For a patient who switches treatment, the counterfactual time to event or censoring is 
$$U_{i,\psi} = \min(T_{L_i}, T_{C_i} + e^{\psi}(C_i - T_{C_i}))$$
and the event indicator can be rewritten as $$\Delta_{i} = I(T_{L_i} \leq  T_{C_i} + e^{\psi}(C_i - T_{C_i}))$$
However, treatment switching is often associated with poor prognosis for survival, i.e., $T_{L_i}$ and $T_{C_i}$ are correlated. Consequently, $T_{L_i}$ and $T_{C_i} + e^{\psi}(C_i - T_{C_i})$ are also correlated. As a result, using the sample $\{(U_{i,\psi},\Delta_i)\}$ will generally produce a biased estimate of the survival distribution of $T_{L_i}$. 

To address this issue, we define a recensoring time that accounts for all possible switching times,

$$D_{i,\psi}^* = \min_{T_{C_i} \in [0, C_i]} \{T_{C_i} + e^{\psi}(C_i - T_{C_i})\} = \min(C_i, e^{\psi}C_i)$$

The recensored time to event or censoring is 

$$U_{i,\psi}^* = \min(U_{i,\psi}, D_{i,\psi}^* ) = \min(T_{L_i}, D_{i,\psi}^* )$$

with the corresponding event indicator

$$\Delta_{i,\psi}^* = I(U_{i,\psi} \leq D_{i,\psi}^* ) = I(T_{L_i} \leq D_{i,\psi}^* )$$

By construction, $T_{L_i} \perp\perp D_{i,\psi}^* $, thus the sample $\{(U_{i,\psi}^* ,\Delta_{i,\psi}^* )\}$ provides an unbiased estimate of the survival distribution of $T_{L_i}$. 

It is important to note that if recensoring is applied only to switchers, the sample becomes 

$$U_{i,\psi}^{\dagger} = \min(T_{L_i}, D_{i,\psi}^* I(S_i=1) + C_i I(S_i=0))$$

$$\Delta_{i,\psi}^{\dagger} = I(T_{L_i} \leq D_{i,\psi}^* I(S_i=1) + C_i I(S_i=0))$$

where $S_i$ is the indicator for treatment switching. Since $S_i$ is correlated with $T_{L_i}$, the resulting censoring time $D_{i,\psi}^* I(S_i=1) + C_i I(S_i=0)$ is also correlated with $T_{L_i}$. Therefore, using the sample $\{(U_{i,\psi}^{\dagger}, \Delta_{i,\psi}^{\dagger})\}$ will lead to biased survival estimates. 

This illustrates that recensoring must be applied to all patients in treatment arms where treatment switching occurs to obtain unbiased estimates of the survival distribution. 

## Potential Convergence Issues
There is no guarantee that the IPE method will produce an unique estimate of the causal parameter $\psi$. See the example in the [SHIVA dataset](https://cran.r-project.org/web/packages/trtswitch/vignettes/ipe.html).

## Example
See the example in the [IPE vignette](https://cran.r-project.org/web/packages/trtswitch/vignettes/ipe.html) of our R package `trtswitch` on [CRAN](https://cran.r-project.org/web/packages/trtswitch).

## Advantages and Limitations 
The advantages and limitations of IPE are comparable to those of RPSFT.
### Advantages
- The IPE does not require covariate information, unlike Inverse Probability Censoring Weighting (IPCW) or Two-Stage models. It can be used when there is little information on covariates.
- The IPE is relatively robust when the switching proportion is high.
- The IPE is most appropriate in studies with crossover from control to investigational treatment, for example, due to early finding of superiority.
### Limitations
- The model is sensitive to the "common treatment effect" assumption. However, this may not be true in real studies. For example, in oncology trials, treatment switching often happens after disease progression, and therefore the treatment effect received post-progression may be weaker than the effect observed immediately received at randomization. To account for this in sensitivity analyses, a `treat effect modifier` parameter can be introduced in the model, usually with a value between 0 and 1, to represent the weaker treatment effect of received after disease progression, via multiplying $\psi$ by this modifier.

## References and Literature
