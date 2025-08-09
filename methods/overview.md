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
The Rank Preserving Structural Failure Time (RPSFT) Model is a method based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred.
The model's key mechanism revolves around the acceleration factor $\psi$, which assumes that the active treatment modifies survival time by a constant multiplicative factor. For patients who switched, their observed survival time is adjusted by this acceleration factor during the period they were on the switched treatment. The "rank preserving" aspect of the model implies that the relative ordering of patients' survival times remains consistent even after these adjustments for treatment effects. The value of $\psi$ is typically estimated using statistical procedures like g-estimation, which minimizes seeks to balance the "counterfactual" event times between treatment groups (e.g., making a test statistic like the log-rank test equal to zero). 
The core of the RPSFT approach is its assumption of a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. The RPSFT model does not inherently require covariate information, unlike some other adjustment methods such as IPCW or Two-Stage Estimation.

# Iterative Parameter Estimation (IPE)
The Iterative Parameter Estimation (IPE) method is very similar to the Rank Preserving Structural Failure Time (RPSFT) Model. Both methods are based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred. As RPSFT, IPE also assumes a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. However, the two methods differ in how the accelerated parameter $\psi$ is estimated: the IPE method iteratively fits a parametric survival model until the estimate of $\psi$ converges whereas RPSFT uses g-estimation to find the optimal value of $\psi$. Similar to RPSFT, IPE also does not inherently require covariate information.

# Inverse Probability Censoring Weighting (IPCW)

# Two-stage Estimation (TSE)

# Marginal Structural Model (MSM)
