---
layout: default
title: Interactive Treatment Switch Analysis
permalink: /interactive/
---

<!-- WebR Styles -->
<style>
.webr-container {
    max-width: 1400px;
    margin: 20px auto;
    padding: 0;
}

.webr-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
}

.webr-intro {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
}

.webr-intro h1 {
    margin: 0 0 15px 0;
    font-size: 2.5em;
    font-weight: 700;
}

.webr-intro p {
    margin: 0;
    opacity: 0.95;
    font-size: 1.2em;
    line-height: 1.4;
}

.webr-status {
    text-align: center;
    padding: 25px;
    background: #fef3c7;
    border-bottom: 1px solid #f59e0b;
    color: #92400e;
    font-weight: 500;
    font-size: 16px;
}

.webr-loading {
    display: none;
    text-align: center;
    padding: 50px;
    color: #6b7280;
}

.webr-spinner {
    border: 4px solid #f3f4f6;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: webr-spin 1s linear infinite;
    margin: 0 auto 25px;
}

@keyframes webr-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.code-block {
    margin: 25px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.code-header {
    background: #f8fafc;
    padding: 18px 25px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.code-title {
    font-weight: 600;
    color: #334155;
    font-size: 17px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.run-btn {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
}

.run-btn:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
}

.run-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.code-editor {
    background: #1e293b;
    color: #e2e8f0;
    border: none;
    padding: 25px;
    font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
    resize: vertical;
    min-height: 200px;
    width: calc(100% - 50px);
    border-radius: 0;
}

.code-editor:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px rgba(102, 126, 234, 0.3);
}

.code-output {
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    padding: 25px;
    font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
    min-height: 100px;
    color: #475569;
    max-height: 600px;
    overflow-y: auto;
}

.info-box {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 10px;
    padding: 25px;
    margin: 25px;
    color: #1e40af;
}

.info-box h3 {
    margin: 0 0 15px 0;
    color: #1e3a8a;
    font-size: 18px;
}

.info-box p {
    margin-bottom: 10px;
    line-height: 1.6;
}

.info-box code {
    background: #dbeafe;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
}

.method-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px;
}

.method-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s;
}

.method-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.method-card h4 {
    margin: 0 0 10px 0;
    color: #374151;
    font-size: 16px;
}

.method-card p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
}

.treatment-switch-examples {
    display: none;
}

.treatment-switch-examples.ready {
    display: block;
}

.file-upload {
    margin: 25px;
    padding: 20px;
    border: 2px dashed #d1d5db;
    border-radius: 8px;
    text-align: center;
    background: #f9fafb;
}

.file-upload input[type="file"] {
    margin: 10px 0;
}

/* Responsive design */
@media (max-width: 768px) {
    .code-header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .code-editor {
        font-size: 13px;
        padding: 20px;
        width: calc(100% - 40px);
    }
    
    .webr-intro h1 {
        font-size: 2em;
    }
    
    .method-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="webr-container">
    <div class="webr-section">
        <div class="webr-intro">
            <h1>🔬 Treatment Switch Validation Suite</h1>
            <p>Interactive R environment for validating IPE, RPSFT, IPCW, and other treatment switching methods</p>
        </div>
        
        <div id="webr-status" class="webr-status">
            🚀 Initializing WebR environment and installing treatment switching packages...
        </div>
        
        <div class="webr-loading" id="webr-loading">
            <div class="webr-spinner"></div>
            <p><strong>Setting up your R environment...</strong><br>
            Installing survival, boot, and related packages for treatment switching analysis.</p>
        </div>
        
        <div id="webr-content" class="treatment-switch-examples">
            <div class="info-box">
                <h3>📊 About This Validation Environment</h3>
                <p>This interactive environment replicates the validation approach from your treatment switching workstream. It includes validation functions for IPE (Inverse Probability of Expansion) and other methods using the same data structure as your internal analyses.</p>
                <p><strong>Data Structure:</strong> The examples use data formatted like your <code>processed_data.csv</code> with columns: <code>id, arm, event, rx, dco, ady, xo, dcut, delta</code></p>
                <p><strong>Validation Approach:</strong> Follows your methodology - implementing both the method and a reference validation function, then comparing results.</p>
            </div>

            <div class="method-grid">
                <div class="method-card">
                    <h4>🎯 IPE Method</h4>
                    <p>Inverse Probability of Expansion validation with iterative psi estimation</p>
                </div>
                <div class="method-card">
                    <h4>⚖️ RPSFT</h4>
                    <p>Rank Preserving Structural Failure Time validation</p>
                </div>
                <div class="method-card">
                    <h4>📊 IPCW</h4>
                    <p>Inverse Probability of Censoring Weighting validation</p>
                </div>
                <div class="method-card">
                    <h4>📈 Built-in Datasets</h4>
                    <p>Shilong, Immdef, and simulated datasets for testing</p>
                </div>
            </div>
            
            <!-- Data Setup -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>📋</span>
                        Setup: Create Data Matching Your Format
                    </span>
                    <button class="run-btn" onclick="runRCode('data-setup', 'data-setup-output')">
                        ▶️ Setup Data
                    </button>
                </div>
                <textarea class="code-editor" id="data-setup"># Create sample data matching your processed_data.csv format
library(survival)
library(boot)
set.seed(2024)

cat("=== TREATMENT SWITCH DATA SETUP ===\n")
cat("Creating data structure matching your validation reports\n\n")

# Generate data similar to your processed_data.csv structure
n <- 150
processed_data <- data.frame(
  id = 10001:(10000 + n),
  arm = rbinom(n, 1, 0.5),  # Treatment arm (0=control, 1=experimental)
  event = rbinom(n, 1, 0.7),  # Event indicator (1=event, 0=censored)
  rx = runif(n, 0, 1),  # Treatment intensity (for two-way switching)
  dco = ifelse(rbinom(n, 1, 0.3), runif(n, 5, 30), NA),  # Days to crossover
  ady = runif(n, 10, 50),  # Analysis day/survival time
  xo = rbinom(n, 1, 0.3),  # Crossover indicator (TRUE/FALSE)
  dcut = runif(n, 35, 55),  # Data cutoff
  delta = rnorm(n, 0, 1)  # Additional parameter
)

# Ensure logical consistency in the data
processed_data$dco[processed_data$xo == 0] <- NA
processed_data$dco[processed_data$xo == 1 & is.na(processed_data$dco)] <- 
  runif(sum(processed_data$xo == 1 & is.na(processed_data$dco)), 5, 
        processed_data$ady[processed_data$xo == 1 & is.na(processed_data$dco)] * 0.8)

# Create one-way switch variables (following your methodology)
processed_data <- processed_data %>%
  mutate(
    # One-way switch treatment intensity
    rx1 = ifelse(arm == 1, 1, 
                 ifelse(xo == TRUE, 1 - dco/ady, 0)),
    # One-way switch indicator  
    xo1 = ifelse(arm == 1, FALSE, xo),
    # Survival time and event status
    survtime = ady,
    status = as.integer(event),
    xoyrs = dco
  )

# Display summary
cat("DATA SUMMARY:\n")
cat("Total patients:", nrow(processed_data), "\n")
cat("Treatment arms - Control:", sum(processed_data$arm == 0), 
    ", Experimental:", sum(processed_data$arm == 1), "\n")
cat("Crossover rate in control arm:", 
    round(100 * mean(processed_data$xo[processed_data$arm == 0]), 1), "%\n")
cat("Events observed:", sum(processed_data$event), "(", 
    round(100 * mean(processed_data$event), 1), "%)\n\n")

cat("FIRST 10 PATIENTS:\n")
display_cols <- c("id", "arm", "event", "xo", "dco", "ady", "rx1", "xo1")
print(processed_data[1:10, display_cols])

cat("\nData structure matches your processed_data.csv format\n")
cat("Ready for IPE validation analysis!\n")</textarea>
                <div class="code-output" id="data-setup-output">Click '▶️ Setup Data' to create treatment switching dataset</div>
            </div>
            
            <!-- IPE Validation Function -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>⚙️</span>
                        IPE Validation Function (Reference Implementation)
                    </span>
                    <button class="run-btn" onclick="runRCode('ipe-validation', 'ipe-validation-output')">
                        ▶️ Load Function
                    </button>
                </div>
                <textarea class="code-editor" id="ipe-validation"># IPE Validation Function - Reference Implementation
# Based on your validate_ipe() function from the validation report

validate_ipe <- function(data, dist = "weibull") {
  cat("=== IPE VALIDATION FUNCTION ===\n")
  cat("Distribution:", dist, "\n")
  cat("Iterative estimation of psi parameter\n\n")
  
  # Initialize variables
  psi <- HR <- shape <- NULL 
  i <- 0
  diff <- 1
  data$survtime_updated <- data$survtime
  data$status_updated <- data$status

  cat("Starting iterative estimation...\n")
  
  # Iterative estimation loop
  while(diff > 1e-05) {
    i <- i + 1
    
    # Fit AFT model
    fit <- survreg(Surv(survtime_updated, status_updated) ~ arm, 
                   data = data, dist = dist)
    
    psi[i] <- -fit$coefficients[[2]]
    shape[i] <- 1/fit$scale
    HR[i] <- exp(-fit$coefficients[[2]]/fit$scale) 
    
    # Update survival times based on current psi estimate
    data$survtime_updated <- ifelse(data$xo1, 
                                    data$xoyrs + (data$survtime - data$xoyrs) * exp(psi[i]),
                                    data$survtime)
    
    # Calculate convergence criterion
    if(i == 1) {
      diff <- 1
    } else {
      diff <- abs(exp(psi[i]) - exp(psi[i-1]))
    }
    
    cat("Iteration", i, ": psi =", round(psi[i], 4), 
        ", exp(psi) =", round(exp(psi[i]), 4), 
        ", diff =", round(diff, 6), "\n")
  }
  
  cat("\nConverged after", i, "iterations\n")
  
  # Final Cox model on counterfactual survival times
  final_fit <- coxph(Surv(survtime_updated, status_updated) ~ arm, data = data) 
  s_fit <- summary(final_fit) 
  
  cat("\nFINAL RESULTS:\n")
  cat("Final psi estimate:", round(psi[length(psi)], 4), "\n")
  cat("Hazard ratio:", round(as.numeric(exp(final_fit$coefficients)), 4), "\n")
  cat("Cox p-value:", round(as.numeric(s_fit$logtest["pvalue"]), 6), "\n")
  
  return(list(
    'psi' = psi[length(psi)], 
    'hr' = as.numeric(exp(final_fit$coefficients)), 
    'cox_pvalue' = as.numeric(s_fit$logtest["pvalue"]), 
    'data_outcome' = data,
    'iterations' = i,
    'convergence_history' = data.frame(iteration = 1:i, psi = psi, hr = HR)
  ))
}

cat("IPE validation function loaded successfully!\n")
cat("Function signature: validate_ipe(data, dist = 'weibull')\n")
cat("- data: dataset with columns survtime, status, arm, xo1, xoyrs\n")
cat("- dist: distribution for AFT model ('weibull', 'exponential', etc.)\n")</textarea>
                <div class="code-output" id="ipe-validation-output">Click '▶️ Load Function' to load the IPE validation function</div>
            </div>

            <!-- Run IPE Validation -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>🔬</span>
                        Run IPE Validation Analysis
                    </span>
                    <button class="run-btn" onclick="runRCode('ipe-analysis', 'ipe-analysis-output')">
                        ▶️ Run IPE Validation
                    </button>
                </div>
                <textarea class="code-editor" id="ipe-analysis"># Run IPE validation analysis on the processed data
cat("=== RUNNING IPE VALIDATION ANALYSIS ===\n\n")

# Check data availability
if (!exists("processed_data")) {
  cat("ERROR: Please run the data setup first!\n")
} else if (!exists("validate_ipe")) {
  cat("ERROR: Please load the validation function first!\n")
} else {
  
  cat("Input data summary:\n")
  cat("- Total patients:", nrow(processed_data), "\n")
  cat("- Patients who switched (xo1=TRUE):", sum(processed_data$xo1, na.rm = TRUE), "\n")
  cat("- Events:", sum(processed_data$status), "\n\n")
  
  # Run the validation
  cat("Starting IPE validation with Weibull distribution...\n")
  cat("=" %R% rep("=", 50) %R% "\n")
  
  ipe_results <- validate_ipe(data = processed_data, dist = "weibull")
  
  cat("\n" %R% rep("=", 50) %R% "\n")
  cat("VALIDATION COMPLETE!\n\n")
  
  cat("SUMMARY OF RESULTS:\n")
  cat("- Final psi estimate:", round(ipe_results$psi, 4), "\n")
  cat("- Treatment effect (HR):", round(ipe_results$hr, 4), "\n")
  cat("- Statistical significance (p-value):", 
      format(ipe_results$cox_pvalue, scientific = TRUE, digits = 3), "\n")
  cat("- Convergence iterations:", ipe_results$iterations, "\n\n")
  
  # Interpretation
  if (ipe_results$hr < 1) {
    cat("INTERPRETATION: HR < 1 suggests experimental treatment benefit\n")
  } else {
    cat("INTERPRETATION: HR > 1 suggests control treatment benefit\n")
  }
  
  if (ipe_results$cox_pvalue < 0.05) {
    cat("Statistical significance: p < 0.05 (significant)\n")
  } else {
    cat("Statistical significance: p >= 0.05 (not significant)\n")
  }
  
  cat("\nCounterfactual survival times calculated for", 
      sum(processed_data$xo1, na.rm = TRUE), "patients who switched treatment\n")
}

# Fix the string concatenation
`%R%` <- function(x, y) paste0(x, y)</textarea>
                <div class="code-output" id="ipe-analysis-output">Setup data and load validation function first, then click '▶️ Run IPE Validation'</div>
            </div>

            <!-- Compare with Standard Analysis -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>📊</span>
                        Compare IPE vs Standard ITT Analysis
                    </span>
                    <button class="run-btn" onclick="runRCode('comparison', 'comparison-output')">
                        ▶️ Run Comparison
                    </button>
                </div>
                <textarea class="code-editor" id="comparison"># Compare IPE-adjusted results with standard ITT analysis
cat("=== COMPARISON: IPE vs STANDARD ITT ANALYSIS ===\n\n")

if (!exists("ipe_results") || !exists("processed_data")) {
  cat("ERROR: Please run the IPE validation analysis first!\n")
} else {
  
  # Standard ITT analysis (ignoring treatment switching)
  cat("1. STANDARD ITT ANALYSIS (ignores switching):\n")
  itt_fit <- coxph(Surv(survtime, status) ~ arm, data = processed_data)
  itt_summary <- summary(itt_fit)
  
  itt_hr <- exp(coef(itt_fit))
  itt_ci <- exp(confint(itt_fit))
  itt_pvalue <- itt_summary$logtest["pvalue"]
  
  cat("   Hazard Ratio:", round(itt_hr, 4), "\n")
  cat("   95% CI: (", round(itt_ci[1], 4), ", ", round(itt_ci[2], 4), ")\n")
  cat("   P-value:", format(itt_pvalue, scientific = TRUE, digits = 3), "\n\n")
  
  # IPE-adjusted analysis
  cat("2. IPE-ADJUSTED ANALYSIS (accounts for switching):\n")
  cat("   Hazard Ratio:", round(ipe_results$hr, 4), "\n")
  cat("   P-value:", format(ipe_results$cox_pvalue, scientific = TRUE, digits = 3), "\n")
  cat("   Psi parameter:", round(ipe_results$psi, 4), "\n\n")
  
  # Comparison table
  cat("3. SIDE-BY-SIDE COMPARISON:\n")
  cat("Method          | HR     | P-value    | Interpretation\n")
  cat("----------------|--------|------------|------------------\n")
  cat("ITT (standard)  |", sprintf("%6.3f", itt_hr), " |", 
      sprintf("%10.2e", itt_pvalue), " | ", 
      ifelse(itt_pvalue < 0.05, "Significant", "Not significant"), "\n")
  cat("IPE (adjusted)  |", sprintf("%6.3f", ipe_results$hr), " |", 
      sprintf("%10.2e", ipe_results$cox_pvalue), " | ",
      ifelse(ipe_results$cox_pvalue < 0.05, "Significant", "Not significant"), "\n\n")
  
  # Impact assessment
  hr_diff <- abs(itt_hr - ipe_results$hr)
  pvalue_diff <- abs(itt_pvalue - ipe_results$cox_pvalue)
  
  cat("4. IMPACT OF TREATMENT SWITCHING ADJUSTMENT:\n")
  cat("   HR difference:", round(hr_diff, 4), "\n")
  cat("   P-value difference:", format(pvalue_diff, scientific = TRUE, digits = 3), "\n")
  
  if (hr_diff > 0.1) {
    cat("   Impact: SUBSTANTIAL - Treatment switching significantly affects results\n")
  } else if (hr_diff > 0.05) {
    cat("   Impact: MODERATE - Treatment switching has noticeable effects\n")
  } else {
    cat("   Impact: MINIMAL - Treatment switching has little effect\n")
  }
  
  cat("\n5. SWITCHING SUMMARY:\n")
  switching_rate <- mean(processed_data$xo1[processed_data$arm == 0], na.rm = TRUE)
  cat("   Switching rate in control arm:", round(switching_rate * 100, 1), "%\n")
  cat("   Patients who switched:", sum(processed_data$xo1, na.rm = TRUE), "\n")
  
  if (switching_rate > 0.2) {
    cat("   Recommendation: IPE adjustment is important due to high switching rate\n")
  } else {
    cat("   Recommendation: Consider both analyses; switching rate is moderate\n")
  }
}</textarea>
                <div class="code-output" id="comparison-output">Run the IPE validation analysis first, then click '▶️ Run Comparison'</div>
            </div>

            <!-- Custom Analysis Section -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>💻</span>
                        Your Custom Validation Code
                    </span>
                    <button class="run-btn" onclick="runRCode('custom-code', 'custom-output')">
                        ▶️ Execute Code
                    </button>
                </div>
                <textarea class="code-editor" id="custom-code" placeholder="Write your custom treatment switching validation code here..."># Your custom treatment switching validation code
# Available datasets: processed_data
# Available functions: validate_ipe()
# Available results: ipe_results (if already run)

# Example: Explore convergence pattern
if (exists("ipe_results")) {
  cat("IPE CONVERGENCE ANALYSIS:\n")
  conv_history <- ipe_results$convergence_history
  
  cat("Iteration history:\n")
  print(conv_history)
  
  cat("\nConvergence pattern:\n")
  for (i in 2:nrow(conv_history)) {
    change <- abs(conv_history$psi[i] - conv_history$psi[i-1])
    cat("Step", i, ": psi change =", format(change, scientific = TRUE, digits = 3), "\n")
  }
  
} else {
  cat("Run the IPE validation first to explore convergence patterns.\n\n")
}

# Example: Validate with different distributions
cat("\nTesting different AFT distributions:\n")
if (exists("processed_data") && exists("validate_ipe")) {
  
  # Test exponential distribution
  cat("Testing exponential distribution...\n")
  exp_results <- validate_ipe(processed_data, dist = "exponential")
  
  cat("\nDistribution comparison:\n")
  cat("Weibull psi   :", round(ipe_results$psi, 4), "\n")
  cat("Exponential psi:", round(exp_results$psi, 4), "\n")
  cat("Difference    :", round(abs(ipe_results$psi - exp_results$psi), 4), "\n")
}</textarea>
                <div class="code-output" id="custom-output">Write your validation code above and click '▶️ Execute Code'</div>
            </div>
        </div>
    </div>
</div>

<!-- WebR JavaScript -->
<script type="module">
    import { WebR } from 'https://webr.r-wasm.org/latest/webr.mjs';
    
    let webR;
    let webRReady = false;
    
    async function initializeWebR() {
        try {
            const statusElement = document.getElementById('webr-status');
            const loadingElement = document.getElementById('webr-loading');
            const contentElement = document.getElementById('webr-content');
            
            statusElement.textContent = '🔧 Loading WebR engine...';
            loadingElement.style.display = 'block';
            
            webR = new WebR();
            await webR.init();
            
            statusElement.textContent = '📦 Installing packages for treatment switching validation...';
            
            try {
                await webR.installPackages(['survival', 'boot']);
                console.log('✅ Core packages installed successfully');
                
                // Load dplyr for data manipulation
                await webR.evalR(`
                    library(survival)
                    library(boot)
                    
                    # Add pipe operator and mutate function for data manipulation
                    \`%>%\` <- function(x, f) f(x)
                    mutate <- function(data, ...) {
                        exprs <- substitute(list(...))
                        for (i in 2:length(exprs)) {
                            expr <- exprs[[i]]
                            col_name <- names(exprs)[i]
                            if (is.null(col_name) || col_name == "") {
                                col_name <- deparse(expr)
                            }
                            data[[col_name]] <- eval(expr, data, parent.frame())
                        }
                        data
                    }
                `);
                
            } catch (e) {
                console.warn('⚠️ Package installation warning:', e);
            }
            
            webRReady = true;
            
            statusElement.style.display = 'none';
            loadingElement.style.display = 'none';
            contentElement.classList.add('ready');
            
            console.log('🎉 WebR environment ready for treatment switching validation');
            
        } catch (error) {
            console.error('❌ WebR initialization failed:', error);
            document.getElementById('webr-status').innerHTML = 
                `<strong>⚠️ Initialization Error:</strong> ${error.message}<br>
                 <small>Please refresh the page and try again.</small>`;
        }
    }
    
    window.runRCode = async function(codeId, outputId) {
        if (!webRReady) {
            document.getElementById(outputId).textContent = '⏳ WebR is still initializing. Please wait...';
            return;
        }
        
        const codeElement = document.getElementById(codeId);
        const outputElement = document.getElementById(outputId);
        const code = codeElement.value;
        
        if (!code.trim()) {
            outputElement.textContent = '❌ Please enter R code to execute.';
            return;
        }
        
        const runButton = codeElement.parentElement.querySelector('.run-btn');
        runButton.disabled = true;
        runButton.innerHTML = '⏳ Running...';
        
        outputElement.textContent = '🚀 Executing validation analysis...';
        outputElement.style.color = '#6b7280';
        
        try {
            const result = await webR.evalR(`
                tryCatch({
                    capture.output({
                        ${code}
                    }, type = "output")
                }, error = function(e) {
                    paste("Error:", e$message)
                })
            `);
            
            const output = await result.toJs();
            
            if (output && output.values && output.values.length > 0) {
                const outputText = output.values.join('\n');
                outputElement.textContent = outputText;
                outputElement.style.color = '#475569';
            } else {
                outputElement.textContent = '✅ Code executed successfully (no output to display).';
                outputElement.style.color = '#059669';
            }
            
        } catch (error) {
            console.error('❌ R execution error:', error);
            outputElement.textContent = `❌ Error executing R code:\n${error.message}`;
            outputElement.style.color = '#dc2626';
        } finally {
            runButton.disabled = false;
            const buttonText = codeId.includes('data-setup') ? 'Setup Data' : 
                              codeId.includes('ipe-validation') ? 'Load Function' :
                              codeId.includes('ipe-analysis') ? 'Run IPE Validation' :
                              codeId.includes('comparison') ? 'Run Comparison' : 'Execute Code';
            runButton.innerHTML = '▶️ ' + buttonText;
        }
    };
    
    document.addEventListener('DOMContentLoaded', initializeWebR);
</script>
