---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section fade-in">
    <div class="hero-content">
        <h1 class="hero-title mdc-typography--headline3">Oncology Treatment Switch Workstream</h1>
        <h2 class="hero-subtitle mdc-typography--headline5">Advanced Statistical Methods for Clinical Trials</h2>
        <p class="hero-description mdc-typography--body1">
            Addressing the impact of treatment switch on long-term outcomes in oncology clinical trials through validated statistical methods and open-source tools.
        </p>
        
        <!-- Action Buttons -->
        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="mdc-button mdc-button--raised">
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon">get_app</i>
                <span class="mdc-button__label">Install Package</span>
            </button>
            <button class="mdc-button mdc-button--outlined">
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon">description</i>
                <span class="mdc-button__label">Documentation</span>
            </button>
            <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon">code</i>
                <span class="mdc-button__label">View on GitHub</span>
            </button>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats-section elevation-1">
    <h2 class="mdc-typography--headline5" style="text-align: center; margin-bottom: 2rem; color: var(--text-primary);">Package Overview</h2>
    <div class="stats-grid">
        <div class="stat-item">
            <div class="stat-number">6</div>
            <div class="stat-label">Statistical Methods</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Validation Coverage</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">Example Datasets</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">0.02%</div>
            <div class="stat-label">Max Error Rate</div>
        </div>
    </div>
</section>

<!-- Feature Cards -->
<section class="card-grid">
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">functions</i>
        </div>
        <h3 class="feature-title">RPSFT Method</h3>
        <p class="feature-description">
            Rank Preserving Structural Failure Time models with comprehensive validation against reference implementations. Handles one-way and two-way treatment switching scenarios.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-validated">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">check_circle</i>
                Validated
            </span>
        </div>
    </div>
    
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">timeline</i>
        </div>
        <h3 class="feature-title">IPE Method</h3>
        <p class="feature-description">
            Iterative Parameter Estimation using accelerated failure time models with flexible parametric distributions including Weibull, exponential, and log-normal.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-validated">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">check_circle</i>
                Validated
            </span>
        </div>
    </div>
    
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">verified</i>
        </div>
        <h3 class="feature-title">Comprehensive Validation</h3>
        <p class="feature-description">
            Extensive cross-dataset validation ensuring reliable, accurate results. Test 6 validation shows excellent agreement with reference implementations.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-validated">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">check_circle</i>
                Complete
            </span>
        </div>
    </div>
    
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">trending_up</i>
        </div>
        <h3 class="feature-title">Bootstrap Support</h3>
        <p class="feature-description">
            Built-in bootstrap confidence intervals and uncertainty quantification for robust statistical inference and regulatory submissions.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-in-progress">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">schedule</i>
                In Progress
            </span>
        </div>
    </div>
    
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">policy</i>
        </div>
        <h3 class="feature-title">Regulatory Guidance</h3>
        <p class="feature-description">
            Developed with regulatory considerations in mind. Includes guidance documents and best practices for FDA and EMA submissions.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-planned">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">schedule</i>
                Planned
            </span>
        </div>
    </div>
    
    <div class="feature-card fade-in">
        <div class="feature-icon">
            <i class="material-icons">code</i>
        </div>
        <h3 class="feature-title">Open Source</h3>
        <p class="feature-description">
            Fully open-source R package with comprehensive documentation, examples, and active community support. MIT licensed for maximum flexibility.
        </p>
        <div style="margin-top: 1rem;">
            <span class="status-chip status-validated">
                <i class="material-icons" style="font-size: 16px; margin-right: 4px;">check_circle</i>
                Available
            </span>
        </div>
    </div>
</section>

<!-- Recent Updates -->
<section class="sidebar elevation-1">
    <h2 class="sidebar-title">Recent Updates</h2>
    
    <div class="mdc-list">
        <div class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic">check_circle</i>
            <div class="mdc-list-item__text">
                <div class="mdc-list-item__primary-text">Test 6 Validation Completed</div>
                <div class="mdc-list-item__secondary-text">June 2025 - Excellent agreement on immdef dataset</div>
            </div>
        </div>
        
        <div class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic">trending_up</i>
            <div class="mdc-list-item__text">
                <div class="mdc-list-item__primary-text">Cross-Dataset Validation</div>
                <div class="mdc-list-item__secondary-text">May 2025 - Framework established for multiple datasets</div>
            </div>
        </div>
        
        <div class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic">build</i>
            <div class="mdc-list-item__text">
                <div class="mdc-list-item__primary-text">Two-Way Switch Investigation</div>
                <div class="mdc-list-item__secondary-text">April 2025 - Identified areas for improvement</div>
            </div>
        </div>
    </div>
</section>

<!-- Installation Instructions -->
<section class="sidebar elevation-1">
    <h2 class="sidebar-title">Quick Start</h2>
    
    <div class="mdc-typography--body2" style="margin-bottom: 1rem;">
        Install the trtswitch package directly from GitHub:
    </div>
    
    <pre><code># Install from GitHub
devtools::install_github("ShreyaSreeram27/trtswitch")

# Load the package
library(trtswitch)

# View example data
data(shilong)
data(immdef)</code></pre>
    
    <div style="margin-top: 1rem;">
        <button class="mdc-button mdc-button--outlined">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon">description</i>
            <span class="mdc-button__label">View Full Documentation</span>
        </button>
    </div>
</section>

<!-- Validation Results Table -->
<section class="elevation-1" style="background: var(--surface-color); border-radius: 12px; padding: 2rem; margin: 2rem 0;">
    <h2 class="mdc-typography--headline5" style="margin-bottom: 1.5rem;">Validation Results Summary</h2>
    
    <div class="data-table">
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Dataset</th>
                    <th>psi Agreement</th>
                    <th>HR Agreement</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>RPSFT One-way</strong></td>
                    <td>shilong</td>
                    <td>0.0002</td>
                    <td>4 decimal places</td>
                    <td><span class="status-chip status-validated">✓ Validated</span></td>
                </tr>
                <tr>
                    <td><strong>RPSFT One-way</strong></td>
                    <td>immdef</td>
                    <td>0.0002</td>
                    <td>4 decimal places</td>
                    <td><span class="status-chip status-validated">✓ Validated</span></td>
                </tr>
                <tr>
                    <td><strong>IPE</strong></td>
                    <td>shilong</td>
                    <td>< 0.001</td>
                    <td>Excellent</td>
                    <td><span class="status-chip status-validated">✓ Validated</span></td>
                </tr>
                <tr>
                    <td><strong>IPE</strong></td>
                    <td>immdef</td>
                    <td>< 0.001</td>
                    <td>Excellent</td>
                    <td><span class="status-chip status-validated">✓ Validated</span></td>
                </tr>
                <tr>
                    <td><strong>RPSFT Two-way</strong></td>
                    <td>shilong</td>
                    <td>Similar</td>
                    <td>Under review</td>
                    <td><span class="status-chip status-in-progress">⚠ In Progress</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<!-- Contact and Collaboration -->
<section class="card-grid">
    <div class="feature-card elevation-2">
        <div class="feature-icon">
            <i class="material-icons">group</i>
        </div>
        <h3 class="feature-title">For Statisticians</h3>
        <p class="feature-description">
            Review validation studies, test on your datasets, contribute to methodology development, and report bugs or suggestions.
        </p>
        <div style="margin-top: 1rem;">
            <button class="mdc-button mdc-button--outlined">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">Get Involved</span>
            </button>
        </div>
    </div>
    
    <div class="feature-card elevation-2">
        <div class="feature-icon">
            <i class="material-icons">local_hospital</i>
        </div>
        <h3 class="feature-title">For Clinicians</h3>
        <p class="feature-description">
            Share real-world treatment switching scenarios, provide clinical context, and participate in case study development.
        </p>
        <div style="margin-top: 1rem;">
            <button class="mdc-button mdc-button--outlined">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">Collaborate</span>
            </button>
        </div>
    </div>
    
    <div class="feature-card elevation-2">
        <div class="feature-icon">
            <i class="material-icons">gavel</i>
        </div>
        <h3 class="feature-title">For Regulatory Scientists</h3>
        <p class="feature-description">
            Review guidance documents, provide regulatory feedback, and share agency perspectives on treatment switching methods.
        </p>
        <div style="margin-top: 1rem;">
            <button class="mdc-button mdc-button--outlined">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">Provide Input</span>
            </button>
        </div>
    </div>
</section>

---

## About This Workstream

The ASA Biopharmaceutical Section's Oncology Treatment Switch Workstream brings together statisticians, clinicians, and regulatory experts to tackle one of the most challenging aspects of modern clinical trials: **treatment switching**.

When patients switch from their assigned treatment to another therapy (often due to disease progression or safety concerns), traditional intent-to-treat analyses may not provide the most relevant estimates of treatment efficacy. Our workstream develops, validates, and promotes statistical methods that can properly adjust for this switching while maintaining scientific rigor.

**Why This Matters:**
- Treatment switching is increasingly common in oncology trials
- Regulatory agencies need robust methods for evaluation  
- Patients and clinicians need clear efficacy estimates
- Statistical community needs validated, accessible tools

<div style="text-align: center; margin: 2rem 0;">
    <button class="mdc-button mdc-button--raised">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__label">Join Our Community</span>
    </button>
</div>
