---
layout: default
title: MSM Method
---

# Marginal Structural Models (MSM)

## Overview

The Marginal Structural Model (MSM), introduced by Robins et al. (2000) and Hernán et al. (2000), provides the framework to adjust for time-dependent confounding in the presence of treatment switching in analyzing observational cohort study data. It uses both inverse probability of treatment weighting (IPTW) and inverse probability of censoring weighting (IPCW) to create a pseudo-population in which switching is independent of measured covariates. Unlike the IPCW method, MSM does not censor data after treatment switching; instead, it retains and re-weights post-switching outcomes, allowing more efficient use of all observed data.

To analyze confounded data by treatment switching in randomized clinical trials (RCTs) by MSM, modifications are needed for the model settings. A Takeda working group published two manuscripts on such modifications under the one-way and two-way treatment switching in RCTs, respectively. This enables MSM to estimate not only the causal effect of the randomized treatment but also the effect of subsequent therapies as a by-product. When key prognostic covariates related to switching and survival are collected at baseline and updated at regular intervals, MSM may offer a more efficient approach than IPCW for estimating the causal treatment effect of the tested agent.

## Model Assumptions

1. **No unmeasured confounding** - MSM relies on the assumption that all relevant confounders are included in the model.

2. **Consistency** - The consistency assumption in causal inference means that a subject's counterfactual outcome under his/her observed exposure history is precisely his/her observed outcome.

3. **Positivity** - Positivity is the condition that patients have a non-zero probability of receiving or not receiving alternative therapy at every level of the combination of confounder set values. When the positivity assumption is violated, bias will be introduced.
   - For one-way treatment switching in RCTs, a two-step approach needs to be used to accommodate the positivity issue (Jing et al. 2025)
   - For two-way treatment switching in RCTs, substantial relative bias for causal inference of both randomized and alternative treatment effects may occur if omitting the R by A(t) interaction term without justification from observed data in MSM analysis (Jing et al. 2022).
   - For both one-way and two-way treatment switching in RCTs, bias for causal inference may occur if omitting baseline confounding factors in the final model when they are not balanced between randomized arms and when stabilized weights are used (Jing et al. 2022; Jing et al. 2025)

## MSM Details Regarding Two-Way Switching

For RCTs with two-way switching, the MSM OS model can be written as:

$$\lambda_T(t|A(t),R, V) = \lambda_0(t)e^{\beta_0 V + \beta_1 R + \beta_2 A(t)}$$

Where:
- $R$ = randomized treatment arm, separated out of vector V
- $V$ is the baseline covariate vector  
- $A(t)$ is a treatment arm switching indicator; overbar indicates history up to time t

**Note 1:** $\beta_2$ is a nuisance parameter for the trial sponsor.

**Note 2:** If switched treatment effect is NOT the same in different R arms, an interaction term needs to be added:
$$\lambda_{TA}(t|R;V,A(t)) = \lambda_0(t)e^{\beta_0 V + \beta_1 R + \beta_2 A(t) + \beta_3 RA(t)}$$

**Note 3:** If V is balanced between R arms, it can be dropped from the model; otherwise, if stabilized weights are used, V needs to stay.

### Estimation Process

#### Step 1: Data Preparation

**Counting process style of input dataset:**
- Data for each subject is identified by a triple element: event counting, at risk, covariate process
- A flexible format that contains both time-fixed covariates/predictors and time-dependent covariates/predictors
- Each patient may have multiple lines of observations
- Each time one of the column values changes for a patient (e.g., censoring status, a covariate, or a flag variable), a new record needs to be added

**One-patient-per-line data matrix:**
- In addition to censoring/event time and flag, it needs to include crossover time and flag information

#### Step 2: Estimate stabilized weights

- Model the probability of switching to A(t) at each time point. Refer to equation (4) in Jing et al. (2022) for details.
- Model the probability of remaining uncensored at each time point. Refer to equation (5) in Jing et al. (2022) for details.

#### Step 3: Truncating Extreme Weights

This step can ensure numerical stability and reduces the influence of sparse data.

#### Step 4: Fit the marginal structural Cox model using the stabilized weights

Include:
- R (randomized treatment)
- A(t) (alternative therapy)
- R × A(t) interaction (important for RCTs)
- If baseline covariate distribution is different between two arms, include V as well

Conduct survival inference using adjusted Kaplan-Meier estimator/weighted log-rank test as needed. Perform sensitivity analysis if needed (e.g., with vs. without extreme weight truncation, with vs. without R × A(t) interaction).

## MSM Details Regarding One-Way Switching

For RCTs with one-way switching, only control patients may switch to active therapy, which contaminates the control arm and breaks comparability with the active arm. If IPTW for switching is applied to patients in both arms, positivity assumption will be violated and switching weights for the active arm are undefined, i.e., if standard IPTW/IPCW approach is used, MSM outcome will be biased due to structural violation of positivity assumption. To address this issue, the following two-step approach needs to be used:

### Step 1: Control Arm Analysis

Treat the control arm as an observational cohort, derive IPTW and apply the following MSM Cox model on control arm data only:

$$\lambda_T(t|A(t),V) = \lambda_0(t)e^{\beta_0 V + \beta_2 A(t)}$$

Where A(t) denotes switching therapy at time t after relapse, i.e., A(t) = R(t).

**Note 1:** After reweighting, $e^{\beta_2}$ is the causal HR at time t: the hazard if all relapsed patients switched versus the hazard if none switched.

### Step 2: Joint Modeling

Active arm data is added on top of step 1 in the joint modeling:
- The active arm patients are assigned with IPTW = 1, as they are not confounded by crossover. We can then compare patients in the active arm to control patients without crossover.
- Derive IPCW weights for censored cases on subjects from both arms.

Then, MSM Cox model is specified as:
$$\lambda_T(t|R(t),R,V) = \lambda_0(t)e^{\beta_0 V + \beta_1 R + \beta_2 R(t)}$$

**Note 1:** Unlike two-way switching cases, there is no interaction between R and R(t) arms in the MSM Cox model.

**Note 2:** Informative censoring may still occur with patients randomized to active treatment, therefore IPCW is applied to both control and active arms.

**Note 3:** If V is balanced between R arms, it can be dropped from the model; otherwise, if stabilized weights are used, V needs to stay.

### Estimation Process for One-Way Switching

**Step 1 and Step 3** for one-way switching are the same as those for two-way switching.

#### Step 2: Estimate stabilized weights

- Model the probability of switching to A(t) at each time point using control arm data only. Refer to equation (3) in Jing et al. (2025)
- Assign IPTW = 1 for active arm patients on all observed time points
- Model the probability of censoring at each time point using data from both arms. Refer to equations (4) and (7) in Jing et al. (2025)

#### Step 4: Fit the marginal structural Cox model using the stabilized weights

Include:
- R (randomized treatment)
- A(t) (alternative therapy)
- If baseline covariate distribution is different between two arms, include V as well

## Advantages and Limitations of MSM

### Advantages

- No common treatment effect assumption is required
- Standard errors can be estimated via data-driven robust variance - The estimation process uses robust sandwich variance estimators in the extended Cox model with counting process dataset input
- MSM uses more data than IPCW (MSM can use post-switching data), and thus may be more efficient than IPCW
- Enables adjusted inference with similar format like ITT - MSM results are interpretable using adjusted Kaplan-Meier curves, log-rank tests, and hazard ratios

### Limitations

- Need to meet positivity and consistency assumption
- May fail if too many (>80%), or too few (<20%) patients switched
- MSM analysis model setting is more complicated than IPCW

## References

Robins JM, Hernán MA, Brumback B. Marginal structural models and causal inference in epidemiology. *Epidemiology* 2000; p.550–60

Hernán, M. Á., Brumback, B., & Robins, J. M. (2000). Marginal structural models to estimate the causal effect of zidovudine on the survival of HIV-positive men. *Epidemiology*, 11(5), 561-570.

Jing X., Guohui L., and Bingxia W. Bias and Type I error Control in Correcting Treatment Effect for Treatment Switching Using Marginal Structural Models in Phase III Oncology Trials, *Journal of Biopharmaceutical Statistics* 2022; Vol 32 (6): 897-914

Jing X., Camden B., Bingxia W., Guohui L., and Cong L. Application of Marginal Structural Models for Causal Inference on the Treatment Effect for Overall Survival in Randomized Controlled Trials having Crossover Designs, manuscript accepted for publication by *Journal of Biopharmaceutical Statistics* in August 2025
