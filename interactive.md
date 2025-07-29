---
layout: default
title: Interactive R Analysis
permalink: /interactive/
---

<!-- WebR Styles -->
<style>
.webr-container {
    max-width: 1200px;
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
    min-height: 180px;
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
    max-height: 500px;
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 25px;
}

.method-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

.method-card h4 {
    margin: 0 0 10px 0;
    color: #374151;
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
            <h1>🔬 Interactive Treatment Switch Analysis</h1>
            <p>Run advanced statistical methods for treatment switching directly in your browser using R and WebAssembly</p>
        </div>
        
        <div id="webr-status" class="webr-status">
            🚀 Initializing WebR environment and installing survival analysis packages...
        </div>
        
        <div class="webr-loading" id="webr-loading">
            <div class="webr-spinner"></div>
            <p><strong>Setting up your R environment...</strong><br>
            This process takes 30-60 seconds and includes installing statistical packages for treatment switching analysis.</p>
        </div>
        
        <div id="webr-content" class="treatment-switch-examples">
            <div class="info-box">
                <h3>📊 About This Interactive Environment</h3>
                <p>This browser-based R environment is specifically configured for oncology treatment switching analysis. It includes the <code>survival</code> package and implements methods covered in our workstream including RPSFT, IPE, IPCW, TSE, and MSM approaches.</p>
                <p><strong>Getting Started:</strong> Run the examples in order, or jump to any specific method. You can modify the code in each example or write your own in the custom code section.</p>
                <p><strong>Performance Note:</strong> Complex analyses may take longer than desktop R, but all standard survival analysis functions are supported.</p>
            </div>

            <div class="method-grid">
                <div class="method-card">
                    <h4>🎯 RPSFT</h4>
                    <p>Rank Preserving Structural Failure Time models</p>
                </div>
                <div class="method-card">
                    <h4>⚖️ IPE</h4>
                    <p>Inverse Probability of Expansion weighting</p>
                </div>
                <div class="method-card">
                    <h4>📊 IPCW</h4>
                    <p>Inverse Probability of Censoring Weighting</p>
                </div>
                <div class="method-card">
                    <h4>⏱️ TSE</h4>
                    <p>Treatment Switching Estimator methods</p>
                </div>
            </div>
            
            <!-- Example 1: Data Generation -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>📋</span>
                        Generate Oncology Treatment Switch Dataset
                    </span>
                    <button class="run-btn" onclick="runRCode('data-gen', 'data-output')">
                        ▶️ Generate Data
                    </button>
                </div>
                <textarea class="code-editor" id="data-gen"># Generate realistic oncology treatment switching data
library(survival)
set.seed(2024)

# Study parameters
n_patients <- 300
study_duration <- 36  # months
randomization_ratio <- 1  # 1:1 randomization

cat("=== ONCOLOGY TREATMENT SWITCHING STUDY SIMULATION ===\n")
cat("Study Design: Randomized Controlled Trial with Treatment Switching\n")
cat("Population: Advanced Cancer Patients\n")
cat("Primary Endpoint: Overall Survival\n\n")

# Generate patient baseline characteristics
patients <- data.frame(
  patient_id = 1:n_patients,
  
  # Demographics
  age = round(rnorm(n_patients, 65, 12)),
  sex = sample(c("Male", "Female"), n_patients, replace = TRUE, prob = c(0.55, 0.45)),
  
  # Disease characteristics
  ecog_ps = sample(0:2, n_patients, replace = TRUE, prob = c(0.3, 0.5, 0.2)),
  stage = sample(c("III", "IV"), n_patients, replace = TRUE, prob = c(0.25, 0.75)),
  
  # Biomarker status (affects both switching and survival)
  biomarker_positive = rbinom(n_patients, 1, 0.4),
  
  # Randomization (0 = Control, 1 = Experimental)
  randomized_arm = rbinom(n_patients, 1, 0.5)
)

# Generate survival times with treatment effect
# Hazard ratios: Control=1.0, Experimental=0.7, Switched=0.8
survival_months <- numeric(n_patients)
switch_times <- numeric(n_patients)
switched <- numeric(n_patients)

for (i in 1:n_patients) {
  # Base hazard influenced by prognostic factors
  base_hazard <- 0.03 * 
    (1 + 0.5 * (patients$age[i] - 65)/10) *  # Age effect
    (1 + 0.3 * patients$ecog_ps[i]) *        # Performance status
    (1 + 0.4 * (patients$stage[i] == "IV"))  # Stage effect
  
  if (patients$randomized_arm[i] == 1) {
    # Experimental arm - better survival
    hazard <- base_hazard * 0.7
    survival_months[i] <- rexp(1, hazard)
    switched[i] <- 0  # No switching in experimental arm
    switch_times[i] <- NA
  } else {
    # Control arm - may switch to experimental
    initial_survival <- rexp(1, base_hazard)
    
    # Probability of switching depends on progression and biomarker
    switch_prob <- 0.4 + 0.2 * patients$biomarker_positive[i]
    
    if (runif(1) < switch_prob) {
      # Patient switches treatment
      switch_time <- runif(1, 2, min(initial_survival * 0.8, 24))
      
      # Survival after switch with reduced hazard
      post_switch_hazard <- base_hazard * 0.8
      additional_survival <- rexp(1, post_switch_hazard)
      
      switched[i] <- 1
      switch_times[i] <- switch_time
      survival_months[i] <- switch_time + additional_survival
    } else {
      # No switching
      switched[i] <- 0
      switch_times[i] <- NA
      survival_months[i] <- initial_survival
    }
  }
}

# Add administrative censoring
patients$survival_time <- pmin(survival_months, study_duration)
patients$event <- ifelse(survival_months <= study_duration, 1, 0)
patients$switched <- switched
patients$switch_time <- switch_times

# Summary statistics
cat("DATASET SUMMARY:\n")
cat("Total patients:", nrow(patients), "\n")
cat("Median age:", median(patients$age), "years\n")
cat("Female patients:", sum(patients$sex == "Female"), "(", 
    round(100*mean(patients$sex == "Female"), 1), "%)\n")
cat("Stage IV disease:", sum(patients$stage == "IV"), "(", 
    round(100*mean(patients$stage == "IV"), 1), "%)\n")
cat("Biomarker positive:", sum(patients$biomarker_positive), "(", 
    round(100*mean(patients$biomarker_positive), 1), "%)\n\n")

cat("TREATMENT ASSIGNMENT:\n")
cat("Control arm:", sum(patients$randomized_arm == 0), "\n")
cat("Experimental arm:", sum(patients$randomized_arm == 1), "\n\n")

cat("TREATMENT SWITCHING:\n")
cat("Patients who switched:", sum(patients$switched, na.rm = TRUE), "\n")
cat("Switch rate in control arm:", 
    round(100 * mean(patients$switched[patients$randomized_arm == 0], na.rm = TRUE), 1), "%\n")
cat("Median time to switch:", 
    round(median(patients$switch_time, na.rm = TRUE), 1), "months\n\n")

cat("SURVIVAL OUTCOMES:\n")
cat("Events observed:", sum(patients$event), "(", 
    round(100*mean(patients$event), 1), "%)\n")
cat("Median follow-up:", round(median(patients$survival_time), 1), "months\n")

# Display first few patients
cat("\nFIRST 10 PATIENTS:\n")
display_cols <- c("patient_id", "age", "sex", "randomized_arm", "switched", 
                  "switch_time", "survival_time", "event")
print(patients[1:10, display_cols])</textarea>
                <div class="code-output" id="data-output">Click '▶️ Generate Data' to create the oncology dataset</div>
            </div>
            
            <!-- Example 2: Standard Survival Analysis -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>📈</span>
                        Standard Intention-to-Treat Analysis
                    </span>
                    <button class="run-btn" onclick="runRCode('itt-analysis', 'itt-output')">
                        ▶️ Run ITT Analysis
                    </button>
                </div>
                <textarea class="code-editor" id="itt-analysis"># Standard ITT analysis - ignores treatment switching
library(survival)

cat("=== INTENTION-TO-TREAT (ITT) ANALYSIS ===\n")
cat("This analysis ignores treatment switching and may underestimate\n")
cat("the true treatment effect due to dilution.\n\n")

# Create survival object
surv_obj <- Surv(patients$survival_time, patients$event)

# Kaplan-Meier curves by randomized treatment
km_itt <- survfit(surv_obj ~ randomized_arm, data = patients)

cat("KAPLAN-MEIER SURVIVAL ESTIMATES:\n")
print(summary(km_itt, times = c(6, 12, 18, 24, 30, 36)))

cat("\nMEDIAN SURVIVAL TIMES:\n")
median_surv <- summary(km_itt)$table
print(median_surv[, c("median", "0.95LCL", "0.95UCL")])

# Log-rank test
logrank_itt <- survdiff(surv_obj ~ randomized_arm, data = patients)
cat("\nLOG-RANK TEST:\n")
print(logrank_itt)

p_value_itt <- 1 - pchisq(logrank_itt$chisq, 1)
cat("P-value:", round(p_value_itt, 4), "\n")

# Cox proportional hazards model
cox_itt <- coxph(surv_obj ~ randomized_arm + age + sex + ecog_ps + 
                 stage + biomarker_positive, data = patients)

cat("\nCOX REGRESSION MODEL (ITT):\n")
print(summary(cox_itt))

# Treatment effect (HR and CI)
hr_itt <- exp(coef(cox_itt)["randomized_arm"])
ci_itt <- exp(confint(cox_itt)["randomized_arm", ])

cat("\nITT TREATMENT EFFECT:\n")
cat("Hazard Ratio:", round(hr_itt, 3), "\n")
cat("95% CI: (", round(ci_itt[1], 3), ", ", round(ci_itt[2], 3), ")\n")
cat("Interpretation: HR < 1 favors experimental treatment\n\n")

cat("IMPACT OF TREATMENT SWITCHING:\n")
cat("Control arm patients who switched:", 
    sum(patients$switched[patients$randomized_arm == 0], na.rm = TRUE), "\n")
cat("This creates bias toward the null hypothesis\n")
cat("(underestimates true treatment benefit)\n")</textarea>
                <div class="code-output" id="itt-output">Generate the dataset first, then click '▶️ Run ITT Analysis'</div>
            </div>

            <!-- Example 3: Treatment Switch Analysis -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>🔄</span>
                        Per-Protocol and As-Treated Analysis
                    </span>
                    <button class="run-btn" onclick="runRCode('pp-analysis', 'pp-output')">
                        ▶️ Run PP Analysis
                    </button>
                </div>
                <textarea class="code-editor" id="pp-analysis"># Per-protocol and as-treated analyses
library(survival)

cat("=== PER-PROTOCOL (PP) AND AS-TREATED ANALYSES ===\n")
cat("These methods attempt to account for treatment switching\n")
cat("but may introduce selection bias.\n\n")

# Per-Protocol Analysis: Exclude switchers
pp_data <- patients[patients$switched == 0 | is.na(patients$switched), ]

cat("PER-PROTOCOL ANALYSIS:\n")
cat("Excluded", nrow(patients) - nrow(pp_data), "patients who switched\n")
cat("Remaining patients:", nrow(pp_data), "\n\n")

surv_pp <- Surv(pp_data$survival_time, pp_data$event)
km_pp <- survfit(surv_pp ~ randomized_arm, data = pp_data)

cat("PP Median survival times:\n")
print(km_pp)

cox_pp <- coxph(surv_pp ~ randomized_arm + age + sex + ecog_ps + 
                stage + biomarker_positive, data = pp_data)

hr_pp <- exp(coef(cox_pp)["randomized_arm"])
ci_pp <- exp(confint(cox_pp)["randomized_arm", ])

cat("\nPER-PROTOCOL TREATMENT EFFECT:\n")
cat("Hazard Ratio:", round(hr_pp, 3), "\n")
cat("95% CI: (", round(ci_pp[1], 3), ", ", round(ci_pp[2], 3), ")\n\n")

# As-Treated Analysis: Time-dependent treatment
cat("AS-TREATED ANALYSIS (Time-dependent treatment):\n")

# Create time-dependent dataset
at_data <- data.frame()

for (i in 1:nrow(patients)) {
  patient <- patients[i, ]
  
  if (patient$randomized_arm == 0 && patient$switched == 1 && 
      !is.na(patient$switch_time)) {
    # Control patient who switched
    
    # Before switch period
    at_data <- rbind(at_data, data.frame(
      patient_id = patient$patient_id,
      start = 0,
      stop = patient$switch_time,
      event = 0,
      treatment = 0,  # Control
      age = patient$age,
      sex = patient$sex,
      ecog_ps = patient$ecog_ps,
      stage = patient$stage,
      biomarker_positive = patient$biomarker_positive
    ))
    
    # After switch period
    if (patient$survival_time > patient$switch_time) {
      at_data <- rbind(at_data, data.frame(
        patient_id = patient$patient_id,
        start = patient$switch_time,
        stop = patient$survival_time,
        event = patient$event,
        treatment = 1,  # Switched to experimental
        age = patient$age,
        sex = patient$sex,
        ecog_ps = patient$ecog_ps,
        stage = patient$stage,
        biomarker_positive = patient$biomarker_positive
      ))
    }
  } else {
    # No switching or experimental arm
    at_data <- rbind(at_data, data.frame(
      patient_id = patient$patient_id,
      start = 0,
      stop = patient$survival_time,
      event = patient$event,
      treatment = patient$randomized_arm,
      age = patient$age,
      sex = patient$sex,
      ecog_ps = patient$ecog_ps,
      stage = patient$stage,
      biomarker_positive = patient$biomarker_positive
    ))
  }
}

# Fit time-dependent Cox model
cox_at <- coxph(Surv(start, stop, event) ~ treatment + age + sex + 
                ecog_ps + stage + biomarker_positive + cluster(patient_id), 
                data = at_data)

hr_at <- exp(coef(cox_at)["treatment"])
ci_at <- exp(confint(cox_at)["treatment", ])

cat("AS-TREATED TREATMENT EFFECT:\n")
cat("Hazard Ratio:", round(hr_at, 3), "\n")
cat("95% CI: (", round(ci_at[1], 3), ", ", round(ci_at[2], 3), ")\n\n")

# Summary comparison
cat("COMPARISON OF METHODS:\n")
cat("Method          | HR    | 95% CI\n")
cat("----------------|-------|------------------\n")
cat("ITT             |", sprintf("%.3f", hr_itt), 
    " | (", sprintf("%.3f", ci_itt[1]), ", ", sprintf("%.3f", ci_itt[2]), ")\n")
cat("Per-Protocol    |", sprintf("%.3f", hr_pp), 
    " | (", sprintf("%.3f", ci_pp[1]), ", ", sprintf("%.3f", ci_pp[2]), ")\n")
cat("As-Treated      |", sprintf("%.3f", hr_at), 
    " | (", sprintf("%.3f", ci_at[1]), ", ", sprintf("%.3f", ci_at[2]), ")\n\n")

cat("INTERPRETATION:\n")
cat("- ITT: Conservative, includes switching bias\n")
cat("- Per-Protocol: May overestimate effect due to selection bias\n")
cat("- As-Treated: Accounts for switching but assumes no confounding\n")
cat("- Advanced methods (RPSFT, IPE, IPCW) needed for unbiased estimates\n")</textarea>
                <div class="code-output" id="pp-output">Generate the dataset first, then click '▶️ Run PP Analysis'</div>
            </div>

            <!-- Custom Code Section -->
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">
                        <span>💻</span>
                        Your Custom Analysis Code
                    </span>
                    <button class="run-btn" onclick="runRCode('custom-code', 'custom-output')">
                        ▶️ Execute Code
                    </button>
                </div>
                <textarea class="code-editor" id="custom-code" placeholder="Write your custom R code here..."># Your custom treatment switching analysis
# The 'patients' dataset is available after running the data generation example
# 
# Available variables:
# - patient_id, age, sex, ecog_ps, stage, biomarker_positive
# - randomized_arm (0=Control, 1=Experimental)  
# - switched (0=No, 1=Yes), switch_time
# - survival_time, event (1=death, 0=censored)

# Example: Explore switching patterns
if (exists("patients")) {
  cat("TREATMENT SWITCHING PATTERNS:\n\n")
  
  # Switch rates by baseline characteristics
  control_patients <- patients[patients$randomized_arm == 0, ]
  
  cat("Switch rate by age group:\n")
  control_patients$age_group <- cut(control_patients$age, 
                                   breaks = c(0, 60, 70, 100), 
                                   labels = c("≤60", "61-70", ">70"))
  print(table(control_patients$age_group, control_patients$switched))
  
  cat("\nSwitch rate by biomarker status:\n")
  switch_by_biomarker <- table(control_patients$biomarker_positive, 
                              control_patients$switched)
  print(switch_by_biomarker)
  
  # Time to switch distribution
  cat("\nTime to switch statistics:\n")
  switch_times <- control_patients$switch_time[!is.na(control_patients$switch_time)]
  cat("Mean time to switch:", round(mean(switch_times), 1), "months\n")
  cat("Median time to switch:", round(median(switch_times), 1), "months\n")
  cat("Range:", round(min(switch_times), 1), "to", round(max(switch_times), 1), "months\n")
  
} else {
  cat("Please run the data generation example first to create the 'patients' dataset.\n")
}</textarea>
                <div class="code-output" id="custom-output">Write your R code above and click '▶️ Execute Code'</div>
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
            
            statusElement.textContent = '📦 Installing survival analysis packages...';
            
            try {
                await webR.installPackages(['survival']);
                console.log('✅ Survival package installed successfully');
            } catch (e) {
                console.warn('⚠️ Package installation warning:', e);
            }
            
            webRReady = true;
            
            statusElement.style.display = 'none';
            loadingElement.style.display = 'none';
            contentElement.classList.add('ready');
            
            console.log('🎉 WebR environment ready for treatment switching analysis');
            
        } catch (error) {
            console.error('❌ WebR initialization failed:', error);
            document.getElementById('webr-status').innerHTML = 
                `<strong>⚠️ Initialization Error:</strong> ${error.message}<br>
                 <small>Please refresh the page and try again. Ensure you're using a modern browser.</small>`;
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
        
        outputElement.textContent = '🚀 Executing analysis...';
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
            runButton.innerHTML = '▶️ ' + (codeId.includes('data-gen') ? 'Generate Data' : 
                                         codeId.includes('itt') ? 'Run ITT Analysis' : 
                                         codeId.includes('pp') ? 'Run PP Analysis' : 'Execute Code');
        }
    };
    
    document.addEventListener('DOMContentLoaded', initializeWebR);
</script>
