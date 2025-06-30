---
layout: default
title: Methods
---

# Statistical Methods for Treatment Switching

## Overview

Under the estimand framework, treatment switching is considered an intercurrent event. A hypothetical strategy is employed when research question of interest is the survival time that would have been observed had the patient not switched treatments. We assume that subsequent therapies are not available so that patients would not switch to alternative treatments. A hypothetical strategy aims to estimate the effect of the initially assigned treatment unconfounded by later therapies via the estimation of the "counterfactual" survival time (i.e., the survival time that would have been observed had the patient not switched treatments). This strategy is especially useful when those subsequent therapies that the gaps are not yet approved or would not otherwise be accessible to the control arm.

This website includes a few most commonly used methods that are aligned with the hypothetical strategy, including Rank Preserved Survival Failure Time (RPSFT), Iterative Parameter Estimation (IPE), Inverse Probability Censoring Weighting (IPCW), Two-stage estimation (TSE), and Marginal Structural Model (MSM).

*Last Updated: March 2024 and Latimer 2024*

---

## Rank Preserved Survival Failure Time (RPSFT)

The Rank Preserving Structural Failure Time (RPSFT) Model is a method based on accelerated failure time (AFT) models to construct the "counterfactual" survival time for switchers via an acceleration factor (ψ) at which had never occurred.

The model's key mechanism revolves around the acceleration factor (ψ), which assumes that the active treatment modifies survival time by a constant multiplicative factor. For patients who switched, their observed survival time is adjusted by this acceleration factor during the period they were on the switched treatment. The "rank preserving" aspect of the model implies that the relative ordering of patients' survival times remains consistent even after these adjustments for treatment effects. The value of ψ is typically estimated using statistical procedures like g-estimation, which minimizes tests to balance the "counterfactual" event times between treatment groups (e.g., making a test statistic like the log-rank test equal to zero).

The crux of the RPSFT approach is its assumption of a common treatment effect: the relative effect of the study treatment is the same as the effect of the switched treatment. The RPSFT model does not inherently require covariate information, unlike some other adjustment methods such as IPCW or Two-Stage Estimation.

### Implementation Example:

```r
library(trtswitch)

# RPSFT with one-way switching
fit_rpsft <- trtswitch::rpsftm(
  data = your_data,
  id = "patient_id", 
  time = "survival_time", 
  event = "event_indicator",
  treat = "treatment_arm", 
  rx = "switch_proportion", 
  recensor = TRUE,
  boot = FALSE
)

# View results
print(fit_rpsft)
summary(fit_rpsft)
```

### Key Features:
- **Causal parameter (ψ):** Represents the treatment effect acceleration factor
- **Counterfactual times:** Estimates what survival would have been without switching
- **Rank preservation:** Maintains relative ordering of survival times
- **G-estimation:** Uses statistical balance to estimate parameters

### Validation Results:
- ✅ Excellent agreement with reference implementation (rpsftm package)
- ✅ Validated on multiple datasets (shilong, immdef)
- ✅ Consistent results across one-way switching scenarios
- ⚠️ Two-way switching scenarios under investigation

---

## Iterative Parameter Estimation (IPE)

IPE method uses accelerated failure time models with iterative estimation to adjust for treatment switching.

### Method Overview:
- Uses parametric survival models (Weibull, exponential, etc.)
- Iteratively estimates treatment effect parameter
- Adjusts survival times based on switching behavior
- Converges to optimal parameter estimates

### Implementation Example:

```r
# IPE example with Weibull distribution
fit_ipe <- trtswitch::ipe(
  data = your_data,
  time = "survival_time", 
  event = "event_indicator",
  treat = "treatment_arm", 
  rx = "switch_proportion",
  aft_dist = "weibull",
  boot = FALSE
)

# Compare with unadjusted analysis
library(survival)
unadjusted <- coxph(Surv(survival_time, event_indicator) ~ treatment_arm, 
                    data = your_data)
```

### Advantages:
- Flexible parametric framework
- Can handle complex switching patterns
- Provides smooth survival curve estimates
- Well-established theoretical foundation

---

## Inverse Probability Censoring Weighting (IPCW)

IPCW is a weighting method that treats treatment switching as an informative censoring problem.

### Method Overview:
- Models the probability of switching using patient covariates
- Creates weights to adjust for informative censoring
- Requires rich covariate information for effectiveness
- Assumes switching depends only on observed characteristics

### Key Assumptions:
- **No unmeasured confounders:** All factors influencing switching are observed
- **Positivity:** All patients have non-zero probability of not switching
- **Correct model specification:** Switching probability model is correctly specified

---

## Two-Stage Estimation (TSE)

TSE is a flexible approach that separates the estimation into two distinct stages.

### Method Overview:
- **Stage 1:** Model the switching process using patient characteristics
- **Stage 2:** Estimate treatment effect using adjusted survival times
- Allows for different modeling approaches in each stage
- Can incorporate complex switching patterns

### Implementation Considerations:
- Choice of models for each stage affects results
- Requires careful validation of stage 1 model
- More flexible but potentially more complex than other methods

---

## Marginal Structural Models (MSM)

MSM extends IPCW by modeling the counterfactual survival directly.

### Method Overview:
- Models the relationship between treatment and survival
- Uses inverse probability weighting to handle confounding
- Can handle time-varying treatments and confounders
- Provides direct estimates of causal effects

---

## Method Comparison and Selection

### When to Use Each Method:

| Method | Best Used When | Key Advantages | Main Limitations |
|--------|---------------|----------------|------------------|
| **RPSFT** | Common treatment effect assumption holds | No covariates required, well-validated | Assumes same effect for all treatments |
| **IPE** | Parametric assumptions are reasonable | Flexible, smooth estimates | Requires distributional assumptions |
| **IPCW** | Rich covariate data available | Handles complex confounding | Needs no unmeasured confounders |
| **TSE** | Flexible modeling needed | Very flexible approach | More complex implementation |
| **MSM** | Time-varying confounders present | Handles dynamic treatments | Complex modeling requirements |

### Validation Framework

Our comprehensive validation approach ensures reliable results:

1. **Reference Implementation Comparison**
   - Compare against established packages
   - Validate mathematical calculations
   - Check edge cases and boundary conditions

2. **Cross-Dataset Validation**
   - Test on multiple real datasets
   - Verify consistency across data structures
   - Assess performance on different sample sizes

3. **Simulation Studies**
   - Test under known truth scenarios
   - Evaluate bias and coverage properties
   - Assess performance under various assumptions

---

## Software Implementation

### trtswitch R Package

The `trtswitch` package provides implementations of multiple methods:

```r
# Installation
devtools::install_github("ShreyaSreeram27/trtswitch")

# Available methods
library(trtswitch)

# RPSFT implementation
?rpsftm

# IPE implementation  
?ipe

# Example datasets
data(shilong)
data(immdef)
```

### Package Features:
- **Multiple methods:** RPSFT, IPE with plans for IPCW, TSE, MSM
- **Comprehensive validation:** Extensive testing against reference implementations
- **Bootstrap support:** Confidence intervals and uncertainty quantification
- **Flexible inputs:** Supports various data structures and switching patterns
- **Documentation:** Detailed help files and vignettes

---

## Resources and References

### Key Publications:
- **Robins & Tsiatis (1991):** Original RPSFT methodology
- **Branson & Whitehead (2002):** RPSFT practical applications
- **Walker et al. (2004):** IPE method development
- **Latimer et al. (2024):** Recent methodological advances

### Regulatory Guidance:
- **FDA Draft Guidance:** Treatment switching in oncology trials
- **EMA Guidelines:** Estimands framework application
- **ICH E9(R1):** Statistical principles for clinical trials addendum

### Software Resources:
- **rpsftm package:** Reference RPSFT implementation
- **survival package:** Core survival analysis tools
- **trtswitch package:** Our comprehensive implementation

---

*For technical questions or method-specific guidance, please refer to our [validation reports]({{ '/resources' | relative_url }}) or contact the workstream team.*
