---
layout: default
title: IPE Method
---

# Iterative Parameter Estimation (IPE)

## Overview
The Iterative Parameter Estimation (IPE) method is very similar to the Rank Preserving Structural Failure Time (RPSFT) Model. Both methods are based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor $\psi$ if the switch had never occurred. As RPSFT, IPE also assumes a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. However, the two methods differ in how the accelerated parameter $\psi$ is estimated: the IPE method iteratively fits a parametric survival model until the estimate of $\psi$ converges whereas RPSFT uses g-estimation to find the optimal value of $\psi$. Similar to RPSFT, IPE also does not inherently require covariate information, which is different from some other adjustment methods such as IPCW or Two-Stage Estimation.

## Model Assumptions

## Model Details

## Estimation Process

## Method-specific topics (eg, re-censoring for RPSFT)

## Additional guidance or recommendations (may be added later)

## Sample codes

## Advantages and Limitations 
### Advantages
### Limitations

## References and Literature
