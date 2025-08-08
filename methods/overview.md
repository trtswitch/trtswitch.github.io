---
layout: default
title: Methods Overview
---

# Method Overview
## Hypothetical Strategy in the Estimand Framework
Under the estimand framework, treatment switching is considered as intercurrent event. A hypothetical strategy is employed when research question of interest is in the survival benefit of an investigational drug versus a control treatment, assuming that subsequent therapies are not available or that patients would not switch to alternative treatments. This strategy aims to estimate the effect of the initially assigned treatment unconfounded by later therapies via the estimation of the "counterfactual" survival time (i.e., the survival time that would have been observed had the patient not switched treatments). This strategy is especially useful when those subsequent therapies are not yet approved or would not otherwise be accessible to the control arm.

This website includes a few most commonly used methods that are aligned with the hypothetical strategy, including Rank Preserved Survival Failure Time (RPSFT), Iterative Parameter Estimation (IPE), Inverse Probability Censoring Weighting (IPCW), Two-stage estimation (TSE), and Marginal Structural Model (MSM). 

Reference: Manitz 2021 and Latimer 2024

# Rank Preserving Structural Failure Time (RPSFT)
The Rank Preserving Structural Failure Time (RPSFT) Model is a method based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor (ψ) if the switch had never occurred.
The model's key mechanism revolves around the acceleration factor (ψ), which assumes that the active treatment modifies survival time by a constant multiplicative factor. For patients who switched, their observed survival time is adjusted by this acceleration factor during the period they were on the switched treatment. The "rank preserving" aspect of the model implies that the relative ordering of patients' survival times remains consistent even after these adjustments for treatment effects. The value of ψ is typically estimated using statistical procedures like g-estimation, which minimizes seeks to balance the "counterfactual" event times between treatment groups (e.g., making a test statistic like the log-rank test equal to zero). 
The core of the RPSFT approach is its assumption of a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. The RPSFT model does not inherently require covariate information, unlike some other adjustment methods such as IPCW or Two-Stage Estimation.

# Iterative Parameter Estimation (IPE)

# Inverse Probability Censoring Weighting (IPCW)

# TSE (Two-stage Estimation (TSE)

# Marginal Structural Model (MSM)
