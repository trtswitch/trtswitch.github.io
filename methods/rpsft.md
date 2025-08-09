---
layout: default
title: RPSFT Method
---

# Rank Preserving Structural Failure Time Model (RPSFT)

## Overview 

The key components of RPSFT are:

Acceleration Factor $\psi$: The core of the RPSFT model assumes that the active treatment modifies survival time by a constant multiplicative factor, often denoted as the "acceleration factor" (e.g., $e^{\psi}$). This factor quantifies the gain or loss in survival time due to receiving the active treatment.
Counterfactual Times: For patients who switched treatments, the model "reconstructs" their survival duration as if they had never received the active treatment they switched to. This involves adjusting their observed survival time by the acceleration factor during the period they were on the switched treatment.

- Rank Preservation: The "rank preserving" aspect implies that the relative ordering (ranks) of patients' survival times remain consistent even after these adjustments for treatment effects.
G-estimation: The model employs a statistical procedure known as "g-estimation" to determine the value of the acceleration factor $\psi$ that balances the "counterfactual" event times between the treatment groups. This is typically achieved by finding the $\psi$ value that makes a test statistic (such as the log-rank test statistic) equal to zero, indicating no difference in the counterfactual survival distributions between the groups.

- Randomization-Based: A significant strength of RPSFT is its randomization-based nature. It primarily relies on information about the randomized treatment group, observed event times, and treatment history to estimate the causal treatment effect, rather than requiring extensive covariate data over time.
Model Assumptions

- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment.
The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).

## Model Assumptions
- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment.
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

## Estimation Process
## Method-specific topics (eg, re-censoring for RPSFT)
## Additional guidance or recommendations (may be added later)
## sample codes

## Advantages and Limitations 
### Advantages
- The RPSFT does not require covariate information, unlike Inverse Probability Censoring Weighting (IPCW) or Two-Stage models. It can be used when there is little information on covariates.
- The RPSFT is relatively robust when the switching proportion is high.
- The RPSFT is most appropriate in studies with crossover from control to investigational treatment, for example, due to early finding of superiority.
### Limitations
- The model is sensitive to the "common treatment effect" assumption. 

## References and Literature

[Back to Methods Overview]({{ '/methods' | relative_url }})
