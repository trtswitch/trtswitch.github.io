---
layout: default
title: Home
---

# Welcome to the Oncology Treatment Switch Workstream

This workstream is formed to address a major challenge in oncology clinical trials, namely the impact of treatment switch on long-term outcomes.

<button class="collapsible">📋 Objectives</button>
<div class="collapsible-content">
  <h3>Primary Objectives</h3>
  <ul>
    <li><strong>Develop standardized methods</strong> for handling treatment switching in clinical trials</li>
    <li><strong>Create validation frameworks</strong> for treatment switch adjustment methods</li>
    <li><strong>Provide guidance</strong> for regulatory submissions involving treatment switching</li>
    <li><strong>Foster collaboration</strong> between statisticians, clinicians, and regulatory agencies</li>
  </ul>
  
  <h3>Secondary Objectives</h3>
  <ul>
    <li>Educate the biostatistics community on treatment switching challenges</li>
    <li>Develop best practices and recommendations</li>
    <li>Create open-source tools and software packages</li>
  </ul>
</div>

<button class="collapsible">🔬 Current Projects</button>
<div class="collapsible-content">
  <h3>trtswitch R Package</h3>
  <p>Development and validation of the <strong>trtswitch R package</strong> for handling treatment switching in clinical trials.</p>
  
  <h4>Key Features:</h4>
  <ul>
    <li><strong>RPSFTM</strong> (Rank Preserving Structural Failure Time Model)</li>
    <li><strong>IPE</strong> (Iterative Parameter Estimation)</li>
    <li><strong>Comprehensive validation suite</strong> against reference implementations</li>
    <li><strong>Bootstrap confidence intervals</strong></li>
    <li><strong>Flexible censoring options</strong></li>
  </ul>
  
  <h4>Installation:</h4>
  <pre><code># Install from GitHub
devtools::install_github("ShreyaSreeram27/trtswitch")

# Load the package
library(trtswitch)</code></pre>
  
  <p><a href="{{ '/methods' | relative_url }}" class="btn">📖 View Methods Documentation</a></p>
</div>

<button class="collapsible">📈 Recent Updates</button>
<div class="collapsible-content">
  <h3>Latest Developments</h3>
  <ul>
    <li><strong>June 2025:</strong> Test 6 validation completed for immdef dataset
      <ul>
        <li>Excellent agreement between trtswitch and reference implementations</li>
        <li>psi estimates differ by only 0.02%</li>
        <li>Hazard ratios agree to 4 decimal places</li>
        <li>Perfect concordance in event indicators (100% agreement)</li>
      </ul>
    </li>
    <li><strong>May 2025:</strong> Cross-dataset validation framework established
      <ul>
        <li>Validation on both shilong and immdef datasets</li>
        <li>Consistent results across different data structures</li>
        <li>Mathematical relationships verified (scaling factors = exp(ψ))</li>
      </ul>
    </li>
    <li><strong>April 2025:</strong> RPSFTM two-way switch validation
      <ul>
        <li>Identified areas for improvement in two-way switching scenarios</li>
        <li>Enhanced understanding of method limitations</li>
      </ul>
    </li>
  </ul>
  
  <h3>Upcoming Work</h3>
  <ul>
    <li><strong>July 2025:</strong> Bootstrap confidence interval validation</li>
    <li><strong>August 2025:</strong> Regulatory guidance document draft</li>
    <li><strong>September 2025:</strong> ASA BIOP webinar presentation</li>
  </ul>
</div>

<button class="collapsible">🔬 Validation Results</button>
<div class="collapsible-content">
  <h3>Test 6 - immdef Dataset Validation</h3>
  <p>Our latest validation study demonstrates excellent agreement between <code>trtswitch::rpsftm()</code> and reference implementations:</p>
  
  <h4>Key Findings:</h4>
  <ul>
    <li><strong>psi parameter:</strong> -0.1850594 vs -0.1848298 (difference: ~0.0002)</li>
    <li><strong>Hazard ratio:</strong> 0.7667704 vs 0.7668067 (difference: ~0.00004)</li>
    <li><strong>p-value:</strong> 0.0197265 vs 0.0193944 (difference: ~0.0003)</li>
    <li><strong>Event concordance:</strong> Perfect 100% agreement</li>
  </ul>
  
  <h4>Validation Summary:</h4>
  <pre><code>One-way switch scenarios: ✅ Excellent agreement
Two-way switch scenarios: ⚠️ Under investigation  
Cross-dataset validation: ✅ Consistent results
Mathematical verification: ✅ Relationships confirmed</code></pre>
  
  <p><strong>Bottom Line:</strong> The trtswitch package produces reliable, accurate results that match established reference implementations across multiple datasets.</p>
</div>

<button class="collapsible">👥 Get Involved</button>
<div class="collapsible-content">
  <h3>How to Contribute</h3>
  
  <h4>For Statisticians:</h4>
  <ul>
    <li>Review our validation studies and provide feedback</li>
    <li>Test the trtswitch package on your own datasets</li>
    <li>Contribute to methodology development</li>
    <li>Report bugs or suggest improvements</li>
  </ul>
  
  <h4>For Clinicians:</h4>
  <ul>
    <li>Share real-world treatment switching scenarios</li>
    <li>Provide clinical context for statistical methods</li>
    <li>Participate in case study development</li>
    <li>Review guidance documents from clinical perspective</li>
  </ul>
  
  <h4>For Regulatory Scientists:</h4>
  <ul>
    <li>Review draft guidance documents</li>
    <li>Provide feedback on regulatory considerations</li>
    <li>Share agency perspectives on treatment switching</li>
    <li>Participate in regulatory working groups</li>
  </ul>
  
  <h3>Contributing to the R Package</h3>
  <ol>
    <li><strong>Fork the repository:</strong> <a href="https://github.com/ShreyaSreeram27/trtswitch" target="_blank">https://github.com/ShreyaSreeram27/trtswitch</a></li>
    <li><strong>Create a feature branch:</strong> <code>git checkout -b feature-name</code></li>
    <li><strong>Make your changes</strong> and add tests</li>
    <li><strong>Submit a pull request</strong> with detailed description</li>
  </ol>
  
  <h3>Contact Information</h3>
  <ul>
    <li><strong>GitHub Repository:</strong> <a href="https://github.com/ShreyaSreeram27/trtswitch" target="_blank">trtswitch</a></li>
    <li><strong>Issues & Bug Reports:</strong> <a href="https://github.com/ShreyaSreeram27/trtswitch/issues" target="_blank">GitHub Issues</a></li>
    <li><strong>Discussions:</strong> <a href="https://github.com/ShreyaSreeram27/trtswitch/discussions" target="_blank">GitHub Discussions</a></li>
    <li><strong>Email:</strong> workstream@asabiop.org</li>
  </ul>
</div>

<button class="collapsible">📚 Resources</button>
<div class="collapsible-content">
  <h3>Documentation</h3>
  <ul>
    <li><a href="https://shreyasreeram27.github.io/trtswitch/" target="_blank">Package Documentation</a></li>
    <li><a href="{{ '/reports/validation-report.html' | relative_url }}">Validation Report</a></li>
    <li><a href="{{ '/resources#user-guide' | relative_url }}">User Guide</a></li>
    <li><a href="{{ '/resources#faq' | relative_url }}">FAQ</a></li>
  </ul>
  
  <h3>Publications & References</h3>
  <ul>
    <li><strong>Methodological Papers:</strong> Key publications on RPSFTM and IPE methods</li>
    <li><strong>Validation Studies:</strong> Peer-reviewed validation research</li>
    <li><strong>Regulatory Guidance:</strong> FDA and EMA perspectives on treatment switching</li>
  </ul>
  
  <h3>Software Dependencies</h3>
  <pre><code># Required packages
install.packages(c("survival", "boot", "dplyr"))

# Suggested packages  
install.packages(c("ggplot2", "knitr", "rmarkdown"))</code></pre>
  
  <h3>Example Datasets</h3>
  <p>The package includes two example datasets for learning and testing:</p>
  <ul>
    <li><strong>shilong:</strong> Simulated oncology trial with treatment switching</li>
    <li><strong>immdef:</strong> Real-world immunodeficiency study data</li>
  </ul>
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
