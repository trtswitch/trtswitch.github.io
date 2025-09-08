---
layout: default
title: IPCW Method
---

# Inverse Probability Censoring Weighting (IPCW)

## Overview 

The Inverse Probability of Censoring Weights (IPCW) method was introduced by Robins et al. (2000). It provides a robust approach for addressing treatment switching in survival analysis. In oncology clinical trials, treatment switching is a common intercurrent event that can bias the estimation of treatment effects of the tested agent, particularly for overall survival (OS). IPCW corrects for this bias by artificially censoring patients at the time of switching and then applying weights on all censored cases to rebalance the confounding factor distribution.

## Model Assumptions

1. No unmeasured confounding – IPCW assumes that all relevant confounders are included in the model.

2. Within a treatment arm, patients censored at time have the same distribution of failure time as those uncensored at time with the same recorded history.

3. Positivity - There is a nonzero probability of remaining uncensored (not switching) for all covariate patterns.

4. Model Specification - The model used to estimate the weight (switching model), and the outcome model must be correctly specified.

## Model Details

For RCTs with either crossover or two-way switching, the IPCW Cox model is:

$$\lambda(t|Z, X, \bar{S}(t)) = \lambda_0(t) \exp(\beta Z + \gamma X + \delta \bar{S}(t))$$

Where:
- $Z$ is randomized treatment arm
- $X$ is a baseline covariate vector  
- $\bar{S}(t)$ is a treatment arm switching indicator; overbar indicates history up to time t

## Estimation Process

### Step 1: Model the Probability of Remaining Uncensored

- A switching model can be constructed using time-dependent Cox regression or pooled logistic regression to estimate the probability of remaining uncensored
- Combine confounders into a single probability per patient per time point
- The IPCW is the inverse of the estimated probability from the switching model

### Step 2: Calculate unstabilized weight for each individual

$$W_i(t) = \prod_{j=1}^{t} \frac{1}{P(C_{ij} = 0 | \bar{C}_{i,j-1} = 0, X_i, \bar{L}_{ij})}$$

where $C_{ij}$ is the indicator of switching in interval $j$, $X_i$ is the vector of baseline covariates for subject $i$, and $\bar{L}_{ij}$ represents time-dependent covariates for subject $i$ in interval $j$.

Stabilized weights is another option that can reduce variability. The switching model for stabilized weights involves a model for the numerator of the weight in addition to the model for the denominator. The numerator is modeled with only baseline covariates, while the denominator includes both baseline and time-dependent covariates.

### Step 3: Truncating/trimming Extreme Weights

This step can ensure numerical stability and reduces the influence of sparse data.

### Step 4: Weighted Survival Analysis

After obtaining the weights, a weighted survival analysis can be conducted. This outcome model typically uses IPCW-weighted survival times to estimate treatment effects. Key considerations include:

- Baseline covariates in the numerator of the weighting model should also be included in the outcome model
- Robust sandwich variance estimators can provide conservative confidence intervals, though bootstrap methods are recommended for target coverage probabilities

## Method-specific topics (eg, re-censoring for RPSFT)

*Content to be added*

## Additional guidance or recommendations (may be added later)

*Content to be added*

## Sample codes

*Content to be added*

## Advantages and Limitations 

### Advantages

- No common treatment effect assumption
- SE may be estimated via data driven robust variance in the extended Cox model with counting process dataset input
- Relatively easy to set up and execute the weighting and analyzing models
- Adjusted KM curves can be generated along with generating p-value from weighted log-rank test, i.e., the outputs may use the same format as conventional time to event analysis
- In addition to being used as a standalone approach, IPCW can also be combined with other adjusted analysis methods, such as TSE, to accommodate informative censoring issues

### Limitations

- May fail if too many (>80%), or too few (<20%) patients switched
- Difficult to meet all key assumptions
- Compared to MSM, IPCW use no data post treatment switching, and thus may lose some efficiency

## References and Literature

Cole, S. R., & Hernán, M. A. (2008). Constructing inverse probability weights for marginal structural models. *American Journal of Epidemiology*, 168(6), 656-664.

D'Agostino, R. B., Lee, M. L., Belanger, A. J., Cupples, L. A., Anderson, K., & Kannel, W. B. (1990). Relation of pooled logistic regression to time dependent Cox regression analysis: the Framingham Heart Study. *Statistics in Medicine*, 9(12), 1501-1515.

Hernán, M. A., Brumback, B., & Robins, J. M. (2001). Marginal structural models to estimate the joint causal effect of nonrandomized treatments. *Journal of the American Statistical Association*, 96(454), 440-448.

Robins, J. M. (2000). Marginal structural models versus structural nested models as tools for causal inference. In *Statistical models in epidemiology, the environment, and clinical trials* (pp. 95-133). New York, NY: Springer New York.

Robins, J. M., & Finkelstein, D. M. (2000). Correcting for noncompliance and dependent censoring in an AIDS clinical trial with inverse probability of censoring weighted (IPCW) log‐rank tests. *Biometrics*, 56(3), 779-788.
