# ASA Biopharmaceutical Section - Oncology Treatment Switch Workstream

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://trtswitch.github.io/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red)](https://jekyllrb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

This repository hosts the official website for the ASA Biopharmaceutical Section's Oncology Treatment Switch Workstream. The workstream brings together experts from industry, academia, and regulatory agencies to advance statistical methods for treatment switching in oncology clinical trials.

🌐 **Live Website**: [https://trtswitch.github.io/](https://trtswitch.github.io/)

## Workstream Mission

Our mission is to develop, validate, and disseminate advanced statistical methodologies to address treatment switching challenges in oncology trials, ensuring robust and reliable evidence for regulatory decision-making.

## Website Features

- **Leadership & Members**: Comprehensive profiles of workstream participants
- **Methods Documentation**: Detailed explanations of treatment switching methodologies:
  - Rank Preserving Structural Failure Time (RPSFT)
  - Inverse Probability of Censoring Weighting (IPCW)
  - Iterative Parameter Estimation (IPE)
  - Two-Stage Estimation (TSE)
  - Marginal Structural Models (MSM)
- **Seminars & Events**: Information about upcoming presentations and workshops
- **Resources**: Code repositories, publications, and educational materials
- **Interactive Table of Contents**: Dynamic navigation for easy content browsing

## Technology Stack

- **Static Site Generator**: Jekyll 4.x
- **Hosting**: GitHub Pages
- **Styling**: Custom CSS with responsive design
- **Math Rendering**: KaTeX for mathematical expressions
- **JavaScript**: Custom scripts for TOC and interactive features

## Repository Structure

```
├── _layouts/           # Jekyll layout templates
├── assets/
│   ├── css/           # Custom stylesheets
│   ├── js/            # JavaScript files
│   └── imgs/          # Images and member photos
├── methods/           # Method documentation pages
├── members.md         # Workstream member profiles
├── seminars.md        # Seminar information
├── resources.md       # Resources and links
├── _config.yml        # Jekyll configuration
└── index.md          # Homepage
```

## Development

### Prerequisites

- Ruby 2.7+
- Jekyll 4.x
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/trtswitch/trtswitch.github.io.git
   cd trtswitch.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Serve locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open `http://localhost:4000` in your browser

### Making Changes

1. Create a new branch for your changes
2. Make your edits
3. Test locally using `bundle exec jekyll serve`
4. Commit and push your changes
5. Create a pull request

## Contributing

We welcome contributions from workstream members and the broader statistical community!

### Adding Member Profiles

1. Add member photo to `/assets/imgs/members/`
2. Update `members.md` with the new profile following the existing format
3. Include LinkedIn profiles, bios, and email contacts

### Adding Method Documentation

1. Create a new file in `/methods/` directory
2. Use the existing method pages as templates
3. Include mathematical formulations using KaTeX syntax
4. Add practical examples and code snippets where applicable

### Content Guidelines

- Use clear, accessible language
- Include proper citations for methodological references
- Ensure mathematical notation is consistent across pages
- Add alt text for all images for accessibility

## Contact

- **General Inquiries**: [trt.switch@gmail.com](mailto:trt.switch@gmail.com)
- **Website Issues**: Create an issue in this repository
- **Workstream Participation**: Contact the leadership team

## Leadership Team

- **Current Co-leads**: Bingxia Wang, Ray Lin
- **Founding Co-leads**: Erik Bloomquist, Meijing Huang

## Sub-teams

- **Methods Sub-team**: Led by Ray Lin & Yufei Wang
- **Code Standardization Sub-team**: Led by Ray Lin & Kaifeng Lu  
- **Tutorial Sub-team**: Led by Ananya Roy

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- ASA Biopharmaceutical Section for sponsorship and support
- All workstream members for their contributions
- Jekyll and GitHub Pages for hosting infrastructure

---

*This website represents ongoing collaborative work. Content and methodologies are continuously being refined and updated.*
