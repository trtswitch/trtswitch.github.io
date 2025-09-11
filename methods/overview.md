---
layout: default
title: Methods Overview
---

# Method Overview
## Hypothetical Strategy in the Estimand Framework
Under the estimand framework, treatment switching is considered as intercurrent event. A hypothetical strategy is employed when research question of interest is in the survival benefit of an investigational drug versus a control treatment, assuming that subsequent therapies are not available or that patients would not switch to alternative treatments. This strategy aims to estimate the effect of the initially assigned treatment unconfounded by later therapies via the estimation of the "counterfactual" survival time (i.e., the survival time that would have been observed had the patient not switched treatments). This strategy is especially useful when those subsequent therapies are not yet approved or would not otherwise be accessible to the control arm.

This website includes a few most commonly used methods that are aligned with the hypothetical strategy, including Rank Preserved Survival Failure Time (RPSFT), Iterative Parameter Estimation (IPE), Inverse Probability Censoring Weighting (IPCW), Two-stage estimation (TSE), and Marginal Structural Model (MSM). 

References
1. [Manitz J, Kan-Dobrosky N, Buchner H, Casadebaig ML, Degtyarev E, Dey J, Haddad V, Jie F, Martin E, Mo M, Rufibach K, Shentu Y, Stalbovskaya V, Sammi Tang R, Yung G, Zhou J. Estimands for overall survival in clinical trials with treatment switching in oncology. Pharm Stat. 2022 Jan;21(1):150-162. doi: 10.1002/pst.2158. Epub 2021 Oct 3. PMID: 34605168.](https://pmc.ncbi.nlm.nih.gov/articles/PMC7818232/)
2. [Bell Gorrod, H., Latimer, N. R., Abrams K.R. NICE DSU Technical Support Document
24: Adjusting survival time estimates in the presence of treatment switching: An update
to TSD 16. 2024.](https://sheffield.ac.uk/find?query=Technical+Support+Document+24%3A+Adjusting+survival+time+estimates+in+the+presence+of+treatment+switching%3A+An+update&f.Tabs%7CAllDocumentsFill=All+results)

# Rank Preserving Structural Failure Time (RPSFT)
The Rank Preserving Structural Failure Time (RPSFT) Model is a method based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred.
The model's key mechanism revolves around the acceleration factor $\psi$, which assumes that the active treatment modifies survival time by a constant multiplicative factor. For patients who switched, their observed survival time is adjusted by this acceleration factor during the period they were on the switched treatment. The "rank preserving" aspect of the model implies that the relative ordering of patients' survival times remains consistent even after these adjustments for treatment effects. The value of $\psi$ is typically estimated using statistical procedures like g-estimation, which minimizes seeks to balance the "counterfactual" event times between treatment groups (e.g., making a test statistic like the log-rank test equal to zero). 
The core of the RPSFT approach is its assumption of a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. The RPSFT model does not inherently require covariate information, unlike some other adjustment methods such as IPCW or Two-Stage Estimation.

# Iterative Parameter Estimation (IPE)
The Iterative Parameter Estimation (IPE) method is very similar to the Rank Preserving Structural Failure Time (RPSFT) Model. Both methods are based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred. As RPSFT, IPE also assumes a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. However, the two methods differ in how the accelerated parameter $\psi$ is estimated: the IPE method iteratively fits a parametric survival model until the estimate of $\psi$ converges whereas RPSFT uses g-estimation to find the optimal value of $\psi$. Similar to RPSFT, IPE also does not inherently require covariate information.

# Inverse Probability Censoring Weighting (IPCW)
The Inverse Probability of Censoring Weights (IPCW) method was introduced by Robins et al. (2000).  It provides a robust approach for addressing treatment switching in survival analysis. In oncology clinical trials, treatment switching is a common intercurrent event that can bias the estimation of treatment effects of the tested agent, particularly for overall survival (OS). IPCW corrects for this bias by artificially censoring patients at the time of switching and then applying weights on all censored cases to rebalance the confounding factor distribution.


# Two-stage Estimation (TSE)
The simple two-stage estimation (TSE) method is developed to account for treatment switching that occurs after a specific disease-related time-point - known as the "secondary baseline", such as the point of disease progression. The approach involves two stages: first, estimating the treatment effect attributable to switching; and second, using this estimate to generate counterfactual survival times for patients who switched treatments - representing the survival outcomes that would have been observed had switching not taken place. The method relies on three key assumptions: (1) switching occurs only at or after the secondary baseline. (2) conditional on variables measured up to the secondary baseline, switching is independent of potential outcomes, and (3) no time-dependent confounding exists between the secondary baseline and the switch.

# Marginal Structural Model (MSM)
The Marginal Structural Model (MSM), introduced by Robins et al. (2000) and Hernán et al. (2000), provides the framework to adjust for time-dependent confounding in the presence of treatment switching in analyzing observational cohort study data. It uses both inverse probability of treatment weighting (IPTW) and inverse probability of censoring weighting (IPCW) to create a pseudo-population in which switching is independent of measured covariates. Unlike the IPCW method, MSM does not censor data after treatment switching; instead, it retains and re-weights post-switching outcomes, allowing more efficient use of all observed data. 
To analyze confounded data by treatment switching in randomized clinical trials (RCTs) by MSM, modifications are needed for the model settings.  A Takeda working group published two manuscripts on such modifications under the one-way and two-way treatment switching in RCTs, respectively. This enables MSM to estimate not only the causal effect of the randomized treatment but also the effect of subsequent therapies as a by-product. When key prognostic covariates related to switching and survival are collected at baseline and updated at regular intervals, MSM may offer a more efficient approach than IPCW for estimating the causal treatment effect of the tested agent.

