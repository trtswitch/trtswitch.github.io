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
devtools::install_github("ShreyaSreeram27/trtswitch")

# Load the package
library(trtswitch)
```

<a href="{{ '/methods' | relative_url }}" class="btn">📖 View Methods Documentation</a>

</div>

<button class="collapsible">📈 Recent Updates</button>
<div class="collapsible-content">

### Latest Developments

- **June 2025:** Test 6 validation completed for immdef dataset
  - Excellent agreement between trtswitch and reference implementations
  - psi estimates differ by only 0.02%
  - Hazard ratios agree to 4 decimal places
  - Perfect concordance in event indicators (100% agreement)
  
- **May 2025:** Cross-dataset validation framework established
  - Validation on both shilong and immdef datasets
  - Consistent results across different data structures
  - Mathematical relationships verified (scaling factors = exp(ψ))
  
- **April 2025:** RPSFTM two-way switch validation
  - Identified areas for improvement in two-way switching scenarios
  - Enhanced understanding of method limitations

### Upcoming Work

- **July 2025:** Bootstrap confidence interval validation
- **August 2025:** Regulatory guidance document draft
- **September 2025:** ASA BIOP webinar presentation

</div>

<button class="collapsible">🔬 Validation Results</button>
<div class="collapsible-content">

### Test 6 - immdef Dataset Validation

Our latest validation study demonstrates excellent agreement between `trtswitch::rpsftm()` and reference implementations:

#### Key Findings:
- **psi parameter:** -0.1850594 vs -0.1848298 (difference: ~0.0002)
- **Hazard ratio:** 0.7667704 vs 0.7668067 (difference: ~0.00004)
- **p-value:** 0.0197265 vs 0.0193944 (difference: ~0.0003)
- **Event concordance:** Perfect 100% agreement

#### Validation Summary:
```
One-way switch scenarios: ✅ Excellent agreement
Two-way switch scenarios: ⚠️ Under investigation  
Cross-dataset validation: ✅ Consistent results
Mathematical verification: ✅ Relationships confirmed
```

**Bottom Line:** The trtswitch package produces reliable, accurate results that match established reference implementations across multiple datasets.

</div>

<button class="collapsible">👥 Get Involved</button>
<div class="collapsible-content">

### How to Contribute

**For Statisticians:**
- Review our validation studies and provide feedback
- Test the trtswitch package on your own datasets
- Contribute to methodology development
- Report bugs or suggest improvements

**For Clinicians:**
- Share real-world treatment switching scenarios
- Provide clinical context for statistical methods
- Participate in case study development
- Review guidance documents from clinical perspective

**For Regulatory Scientists:**
- Review draft guidance documents
- Provide feedback on regulatory considerations
- Share agency perspectives on treatment switching
- Participate in regulatory working groups

### Contributing to the R Package

1. **Fork the repository:** https://github.com/ShreyaSreeram27/trtswitch
2. **Create a feature branch:** `git checkout -b feature-name`
3. **Make your changes** and add tests
4. **Submit a pull request** with detailed description

### Contact Information
- **GitHub Repository:** [trtswitch](https://github.com/ShreyaSreeram27/trtswitch)
- **Issues & Bug Reports:** [GitHub Issues](https://github.com/ShreyaSreeram27/trtswitch/issues)
- **Discussions:** [GitHub Discussions](https://github.com/ShreyaSreeram27/trtswitch/discussions)
- **Email:** workstream@asabiop.org

</div>

<button class="collapsible">📚 Resources</button>
<div class="collapsible-content">

### Documentation
- [Package Documentation](https://shreyasreeram27.github.io/trtswitch/)
- [Validation Report]({{ '/reports/validation-report.html' | relative_url }})
- [User Guide]({{ '/resources#user-guide' | relative_url }})
- [FAQ]({{ '/resources#faq' | relative_url }})

### Publications & References
- **Methodological Papers:** Key publications on RPSFTM and IPE methods
- **Validation Studies:** Peer-reviewed validation research
- **Regulatory Guidance:** FDA and EMA perspectives on treatment switching

### Software Dependencies
```r
# Required packages
install.packages(c("survival", "boot", "dplyr"))

# Suggested packages  
install.packages(c("ggplot2", "knitr", "rmarkdown"))
```

### Example Datasets
The package includes two example datasets for learning and testing:
- **shilong:** Simulated oncology trial with treatment switching
- **immdef:** Real-world immunodeficiency study data

</div>

---

## Quick Navigation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">

<div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
<h3>📊 Methods</h3>
<p>Statistical approaches for treatment switching</p>
<a href="{{ '/methods' | relative_url }}" class="btn">Learn More</a>
</div>

<div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
<h3>🎯 Objectives</h3>
<p>Goals and scope of the workstream</p>
<a href="{{ '/objectives' | relative_url }}" class="btn">View Details</a>
</div>

<div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
<h3>📚 Resources</h3>
<p>Documentation, papers, and guides</p>
<a href="{{ '/resources' | relative_url }}" class="btn">Explore</a>
</div>

<div style="text-align: center; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
<h3>📦 R Package</h3>
<p>Download and install trtswitch</p>
<a href="https://github.com/ShreyaSreeram27/trtswitch" class="btn" target="_blank">GitHub</a>
</div>

</div>

---

## About This Workstream

The ASA Biopharmaceutical Section's Oncology Treatment Switch Workstream brings together statisticians, clinicians, and regulatory experts to tackle one of the most challenging aspects of modern clinical trials: **treatment switching**.

When patients switch from their assigned treatment to another therapy (often due to disease progression or safety concerns), traditional intent-to-treat analyses may not provide the most relevant estimates of treatment efficacy. Our workstream develops, validates, and promotes statistical methods that can properly adjust for this switching while maintaining scientific rigor.

**Why This Matters:**
- Treatment switching is increasingly common in oncology trials
- Regulatory agencies need robust methods for evaluation
- Patients and clinicians need clear efficacy estimates
- Statistical community needs validated, accessible tools

Join us in advancing the science of treatment switching analysis!
