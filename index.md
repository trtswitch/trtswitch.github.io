---
layout: default
title: Home
---

# Welcome to the Oncology Treatment Switch Workstream

This workstream is formed to address a major challenge in oncology clinical trials, namely the impact of treatment switch on long-term outcomes.

<button class="collapsible">📋 Objectives</button>
<div class="collapsible-content">

### Primary Objectives

- **Develop standardized methods** for handling treatment switching in clinical trials
- **Create validation frameworks** for treatment switch adjustment methods
- **Provide guidance** for regulatory submissions involving treatment switching
- **Foster collaboration** between statisticians, clinicians, and regulatory agencies

### Secondary Objectives

- Educate the biostatistics community on treatment switching challenges
- Develop best practices and recommendations
- Create open-source tools and software packages

</div>

<button class="collapsible">🔬 Current Projects</button>
<div class="collapsible-content">

### trtswitch R Package

Development and validation of the **trtswitch R package** for handling treatment switching in clinical trials.

#### Key Features:
- **RPSFTM** (Rank Preserving Structural Failure Time Model)
- **IPE** (Iterative Parameter Estimation) 
- **Comprehensive validation suite** against reference implementations
- **Bootstrap confidence intervals**
- **Flexible censoring options**

#### Installation:
```r
# Install from GitHub
devtools::install_github("your-username/trtswitch")

# Load the package
library(trtswitch)
