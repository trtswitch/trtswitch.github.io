---
layout: default
title: TSE Method
---

# Two-stage Estimation (TSE)

## Overview 

The simple two-stage estimation (TSE) method is developed to account for treatment switching that occurs after a specific disease-related time-point - known as the "secondary baseline", such as the point of disease progression. The approach involves two stages: first, estimating the treatment effect attributable to switching; and second, using this estimate to generate counterfactual survival times for patients who switched treatments - representing the survival outcomes that would have been observed had switching not taken place.

## Model Assumptions

- Treatment switching occurs at or after a disease-related secondary baseline time point.

- Given all variables measured up to the secondary baseline, the decision to switch treatment is independent of the potential outcomes (i.e., no unmeasured confounding).

- If switching happens after the secondary baseline, then variables measured after that point (which may be prognostic) do not affect the probability of switching (i.e., no time-dependent confounding between the secondary baseline and the time of switch).

## Estimation of $\psi$

The simple TSE method involves applying an accelerated failure time (AFT) model that compares post-progression survival in control group switchers with post-progression survival in control group non-switchers. Prognostic variables measured at the secondary baseline are included to account for differences between the groups. The treatment effect of switching is estimated as a time ratio and used to adjust the survival times of switchers.

Although $\psi$ is estimated solely from control group patients who experienced disease progression, it will also be applied to adjust the survival times of patients who switched treatments before disease progression, under the assumption that there are only a limited number of such cases.

## Estimation of Counterfactual Treatment Effect

Once $\psi$ has been estimated, we can derive an adjusted data set and fit a (potentially stratified) Cox proportional hazards model to the adjusted data set to obtain an estimate of the hazard ratio. The confidence interval for the hazard ratio can be derived by bootstrapping the entire adjustment and subsequent model-fitting process.

## Recensoring

If censoring is present in the data, re-censoring can be applied to adjust the data in all groups affected by treatment switching. For a detailed discussion of this topic, see the Method page for [RPSFTM]({{ '/methods/rpsft' | relative_url }}).

## Advantages and Limitations 

### Advantages

- The simple TSE method does not require the "common treatment effect" assumption, as the first step estimates the treatment effect specifically for switchers in the control group. So it may be the most suitable adjustment approach when a time-dependent treatment effect is suspected - particularly in scenarios where treatment switching is restricted to post-progression, occurs promptly after progression, and key prognostic variables are collected at the time of progression.

### Limitations

- The simple TSE method may have limited generalizability, as it depends on the ability to identify a valid secondary baseline.

- The simple TSE method is sensitive to bias when the switching proportion is very high, though it is less pronounced than with IPCW.

<!--
## Additional guidance or recommendations (may be added later)
-->

## Example
See the example in the [Simple TSE vignette](https://cran.r-project.org/web/packages/trtswitch/vignettes/tsesimp.html) of our R package `trtswitch` on [CRAN](https://cran.r-project.org/web/packages/trtswitch).

## References and Literature

[Back to Methods Overview]({{ '/methods' | relative_url }})

