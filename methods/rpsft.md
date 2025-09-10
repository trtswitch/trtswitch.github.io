---
layout: default
title: RPSFT Method
---

# Rank Preserving Structural Failure Time Model (RPSFT)

## Overview 
The Rank Preserving Structural Failure Time (RPSFT) Model is a method based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred.
The model's key mechanism revolves around the acceleration factor $\psi$, which assumes that the active treatment modifies survival time by a constant multiplicative factor. For patients who switched, their observed survival time is adjusted by this acceleration factor during the period they were on the switched treatment. The "rank preserving" aspect of the model implies that the relative ordering of patients' survival times remains consistent even after these adjustments for treatment effects. The value of $\psi$ is typically estimated using statistical procedures like g-estimation, which minimizes seeks to balance the "counterfactual" event times between treatment groups (e.g., making a test statistic like the log-rank test equal to zero). 
The core of the RPSFT approach is its assumption of a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. The RPSFT model does not inherently require covariate information, unlike some other adjustment methods such as IPCW or Two-Stage Estimation.

<!--
The key components of RPSFT are:

- Acceleration Factor $\psi$: The core of the RPSFT model assumes that the active treatment modifies survival time by a constant multiplicative factor, often denoted as the "acceleration factor" (e.g., $e^{\psi}$). This factor quantifies the gain or loss in survival time due to receiving the active treatment.
Counterfactual Times: For patients who switched treatments, the model "reconstructs" their survival duration as if they had never received the active treatment they switched to. This involves adjusting their observed survival time by the acceleration factor during the period they were on the switched treatment.

- Rank Preservation: The "rank preserving" aspect implies that the relative ordering (ranks) of patients' survival times remain consistent even after these adjustments for treatment effects.
G-estimation: The model employs a statistical procedure known as "g-estimation" to determine the value of the acceleration factor $\psi$ that balances the "counterfactual" event times between the treatment groups. This is typically achieved by finding the $\psi$ value that makes a test statistic (such as the log-rank test statistic) equal to zero, indicating no difference in the counterfactual survival distributions between the groups.

- Randomization-Based: A significant strength of RPSFT is its randomization-based nature. It primarily relies on information about the randomized treatment group, observed event times, and treatment history to estimate the causal treatment effect, rather than requiring extensive covariate data over time.
Model Assumptions

- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment.  
- The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).
-->

## Model Assumptions
- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment. This strong assumption can be relaxed by introducing a `treat effect modifier` parameter to specify the relative effect of the treatment received at switching vs the treatment received at randomization. This effect modifier is implemented via multiplying $\psi$.

- The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).

## Model Details

RPSFT adjusts for the effects of treatment switching by modeling what the survival times of patients who switched treatments would have been if they had remained on the control treatment. The model assumes that the treatment effect is the same regardless of when the patient received the treatment. 

The rank-preserving property means that the relative ordering of counterfactural survival times under the experimental treatment is the same as the relative ordering of counterfactural survival times under the control treatment. Formally, let $Y_i^{a=1}$ represent the potential outcome for subject $i$ under treatment condition $a=1$ (experimental), and $Y_i^{a=0}$ represent the potential outcome under treatment condition $a=0$ (control). If the ranking of $\{Y_i^{a=1}: i=1,\ldots,n\}$ is identical to the ranking of $\{Y_i^{a=0}: i=1,\ldots,n\}$, we say that rank preservation holds. 

The structural failure time model refers to a framework used to estimate the true (unobserved) survival time in the absence of treatment switching, assuming that the experimental treatment has a multiplicative effect on survival. Specifically, each patient's observed survival time, $T_i$, is divided into the time spent on the control treatment, $T_{C_i}$, and the time spent on the experimental treatment, $T_{E_i}$, such that $T_i = T_{C_i} + T_{E_i}$. The `rx` parameter in the `rpsftm` function represents the proportion of time spent on the experimental treatment, defined as the ratio $T_{E_i}/T_i$. The structural model for counterfactual untreated survival times is expressed as
$$U_{i,\psi} = T_{C_i} + e^{\psi} T_{E_i},$$
where there are three distinct cases for one-way treatment switching from the control arm to the experimental arm:

- **Experimental Group Patients**: $T_{C_i} = 0$, and $T_{E_i}$ represents the time from randomization to either death or censoring. 

- **Control Group Nonswitchers**: $T_{C_i}$ is the time from randomization to either death or censoring, and $T_{E_i} = 0$. 

- **Control Group Switchers**: $T_{C_i}$ is the time from randomization to treatment switch, and $T_{E_i}$ is the time from the switch to either death or censoring.

## Estimation of $\psi$
For a fixed value of $\psi$, we can construct the counterfactual untreated survival times $U_{i,\psi}^\*$ and the corresponding event indicators $\Delta_{i,\psi}^\*$. The `psi_test` parameter specifies the method used to estimate $\psi$. 

- When `psi_test = "logrank"`, a log-rank test (which may be stratified) is used to compare the counterfactual untreated survival times between the two treatment groups. 

- When `psi_test = "phreg"`, a Cox proportional hazards model (which may also be stratified) is used to test for treatment differences while adjusting for baseline covariates. 

- When `psi_test = "lifereg"`, an accelerated failure time (AFT) model is used to assess treatment differences, also adjusting for baseline covariates. If stratification factors are provided, they are converted into dummy variables and included as covariates in the AFT model for estimating $\psi$. 

In all cases, let $Z(\psi)$ denote the Z-test statistic used to evaluate the treatment effect based on the counterfactual untreated survival times. Under the assumption that potential outcomes are independent of the randomized treatment group, the estimate of $\psi$ is the value that makes $Z(\psi)$ closest to zero. The confidence limits for $\psi$ can be derived from the values of $\psi$ that yield $Z(\psi)$ closest to $\Phi^{-1}(1 - \alpha/2)$ and $\Phi^{-1}(\alpha/2)$, where $\Phi(x)$ is the cumulative distribution function of the standard normal distribution and $\alpha$ is the two-sided significance level.

Two common methods for estimating $\psi$:

1. **Grid search method**: This divides a specified interval for $\psi$ (`low_psi` to `hi_psi`) into a specified number of subintervals and evaluates $Z(\psi)$ at these equally spaced points of $\psi$ (including the endpoints `low_psi` and `hi_psi`).
2. **Root-finding method**: This method uses numerical techniques, such as Brent's method, to find the value of $\psi$ such that $Z(\psi) = 0$ for the point estimate, $Z(\psi) = \Phi^{-1}(1 - \alpha/2)$ for the lower confidence limit, and $Z(\psi) = \Phi^{-1}(\alpha/2)$ for the upper confidence limit. 

It is important to note that the solution for $\psi$ may not be unique and may depend on the search interval and convergence tolerance.

Regardless of the method used for estimating $\psi$, it is helpful to visualize the log-rank test statistic, $Z(\psi)$, across a range of $\psi$ values. Additionally, a Kaplan-Meier plot of the counterfactual survival times for the two randomized groups provides further validation of the estimated value of $\psi$. 


## Estimation of Counterfactual Treatment Effect
Let $A_i$ denote the randomized treatment group and $Z_i$ the baseline covariates for subject $i$ ($i=1,\ldots,n$). Once $\psi$ has been estimated, we can fit a (potentially stratified) Cox proportional hazards model to the following: 

- The observed survival times of the experimental group:  $\{(T_i,\Delta_i,Z_i): A_i = 1\}$

- The counterfactual survival times for the control group:  $\{(U_{i,\psi}^* , \Delta_{i,\psi}^* , Z_i): A_i = 0\}$ evaluated at $\psi = \hat{\psi}$.

This allows us to obtain an estimate of the treatment effect hazard ratio. The confidence interval for the hazard ratio can be derived by either 

1. Matching the p-value from the log-rank test for an intention-to-treat (ITT) analysis, or
2. Bootstrapping the entire adjustment and subsequent model-fitting process. 


## Recensoring
The censoring time $C_i$ must be defined for all patients including those who experience an event. We assume that censoring is non-informative in the absence of treatment switching, i.e., $T_{L_i} \perp\perp C_i$, where $T_{L_i}$ denotes the latent time to event for subject $i$. 

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

## Advantages and Limitations 
### Advantages
- The RPSFT does not require covariate information, unlike Inverse Probability Censoring Weighting (IPCW) or Two-Stage models. It can be used when there is little information on covariates.
- The RPSFT is relatively robust when the switching proportion is high.
- The RPSFT is most appropriate in studies with crossover from control to investigational treatment, for example, due to early finding of superiority.
  
### Limitations
- The model is sensitive to the "common treatment effect" assumption. However, this may not be true in real studies. For example, in oncology trials, treatment switching often happens after disease progression, and therefore the treatment effect received post-progression may be weaker than the effect observed immediately received at randomization. To account for this in sensitivity analyses, a `treat effect modifier` parameter can be introduced in the model, usually with a value between 0 and 1, to represent the weaker treatment effect of received after disease progression, via multiplying $\psi$ by this modifier.


## Additional guidance or recommendations (may be added later)

## Example
See the example in the [RPSFT vignette](https://cran.r-project.org/web/packages/trtswitch/vignettes/rpsftm.html) of our R package `trtswitch` on [CRAN](https://cran.r-project.org/web/packages/trtswitch).


## References and Literature

1. Latimer NR, A.K., NICE DSU Technical Support Document 16: Adjusting
Survival Time Estimates in the Presence of Treatment Switching. . 2014,
National Institute for Health and Care Excellence (NICE).
2. Robins, J.M. and A.A. Tsiatis, Correcting for non-compliance in randomized
trials using rank preserving structural failure time models. Communications in
statistics-Theory and Methods, 1991. 20(8): p. 2609-2631.
3. Robins, J.M. and D.M. Finkelstein, Correcting for noncompliance and
dependent censoring in an AIDS clinical trial with inverse probability of
censoring weighted (IPCW) log‐rank tests. Biometrics, 2000. 56(3): p. 779-788.
4. Branson, M. and J. Whitehead, Estimating a treatment effect in survival studies
in which patients switch treatment. Statistics in medicine, 2002. 21(17): p. 2449-
2463.
5. Latimer, N.R., et al., Adjusting for treatment switching in randomised controlled
trials–a simulation study and a simplified two-stage method. Statistical methods
in medical research, 2017. 26(2): p. 724-751.
9. White, I.R., S. Walker, and A. Babiker, strbee: Randomization-based efficacy
estimator. The Stata Journal, 2002. 2(2): p. 140-150.
21. Rutherford, M.J., et al., NICE DSU Technical Support Document 21. Flexible
Methods for Survival Analysis. 2020, NICE Decision Support Unit.
22. White, I.R., Uses and limitations of randomization-based efficacy estimators.
Statistical methods in medical research, 2005. 14(4): p. 327-347.
23. White, I.R., et al., Randomization‐based methods for correcting for treatment
changes: examples from the Concorde trial. Statistics in medicine, 1999.
18(19): p. 2617-2634.
24. Allison, A., I.R. White, and S. Bond, Rpsftm: an R package for rank preserving
structural failure time models. The R journal, 2017. 9(2): p. 342.
25. Latimer, N., et al., Causal inference for long-term survival in randomised trials
with treatment switching: Should re-censoring be applied when estimating
counterfactual survival times? Statistical methods in medical research, 2019.
28(8): p. 2475-2493.
26. White, I.R., Estimating treatment effects in randomized trials with treatment
switching. Statistics in medicine, 2006. 25(9): p. 1619-1622.
27. Chen, Q., et al., Estimation of treatment effects and model diagnostics with two-
way time-varying treatment switching: an application to a head and neck study.
Lifetime data analysis, 2020. 26(4): p. 685-707.
28. Bowden, J., et al., Gaining power and precision by using model–based weights
in the analysis of late stage cancer trials with substantial treatment switching.
Statistics in medicine, 2016. 35(9): p. 1423-1440.
29. Jiménez, J.L., et al., A modified weighted log-rank test for confirmatory trials
with a high proportion of treatment switching. Plos one, 2021. 16(11): p.
e0259178.
30. Ristl, R., et al., Delayed treatment effects, treatment switching and
heterogeneous patient populations: How to design and analyze RCTs in
oncology. Pharmaceutical statistics, 2021. 20(1): p. 129-145.
