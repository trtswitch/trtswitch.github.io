---
layout: default
title: RPSFT Method
---

# Rank Preserving Structural Failure Time Model (RPSFT)

```{r, include = FALSE}
knitr::opts_chunk$set(
  collapse = TRUE,
  comment = "#>"
)
```


$$T_i = \min(T_{C_i} + e^{-\psi}(T_{L_i} - T_{C_i}), C_i)$$ 
with the event indicator
$$\Delta_{i} = I(T_{C_i} + e^{-\psi}(T_{L_i} - T_{C_i})\leq C_i)$$
For a patient who switches treatment, the counterfactual time to event or censoring is 
$$U_{i,\psi} = \min(T_{L_i}, T_{C_i} + e^{\psi}(C_i - T_{C_i}))$$

## Overview 

Key Components: $\alpha$

Acceleration Factor (ψ): The core of the RPSFT model assumes that the active treatment modifies survival time by a constant multiplicative factor, often denoted as the "acceleration factor" (e.g., exp(ψ)). This factor quantifies the gain or loss in survival time due to receiving the active treatment.
Counterfactual Times: For patients who switched treatments, the model "reconstructs" their survival duration as if they had never received the active treatment they switched to. This involves adjusting their observed survival time by the acceleration factor during the period they were on the switched treatment.
Rank Preservation: The "rank preserving" aspect implies that the relative ordering (ranks) of patients' survival times remain consistent even after these adjustments for treatment effects.
G-estimation: The model employs a statistical procedure known as "g-estimation" to determine the value of the acceleration factor (ψ) that balances the "counterfactual" event times between the treatment groups. This is typically achieved by finding the ψ value that makes a test statistic (such as the log-rank test statistic) equal to zero, indicating no difference in the counterfactual survival distributions between the groups.
Randomization-Based: A significant strength of RPSFT is its randomization-based nature. It primarily relies on information about the randomized treatment group, observed event times, and treatment history to estimate the causal treatment effect, rather than requiring extensive covariate data over time.
Model Assumptions
Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment.
The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).

## Model Assumptions
- Common Treatment Effect: This assumption posits that the treatment effect (represented by the acceleration factor) is consistent across all individuals, regardless of when the investigational therapy is initiated, the characteristics of the patient who switches, and the type of the switched therapy. This implies that the effect of the treatment on survival time is the same for all participants with respect to the time spent on treatment.
- The model does not require any additional assumption regarding the switch or the outcome of interest (e.g., the effect of covariates on the switch or on the outcome).

## Model Details
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
