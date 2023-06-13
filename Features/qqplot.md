# QQ Plot

Identify deviation from the expected distribution of p-values

QQPlot implements a standard way of visualizing a distribution of p-values. Ideally a p-value distribution for all the genetic variants (black dots) will form a tight line with the expected distribution of random chance (gray line) until the very end where it will deviate if the study has any significant findings.

![Here is an example where the genomic inflation is under control (lambda = 1.03) and we see that the p-values follow the expected distribution of random chance (gray line) until the very end where we are hoping it will deviate.](/images/QQPlot_Image1.png)
![Here is an example where genomic inflation is present (lambda = 1.11) and we see that the p-values deviate from the the expected distribution of random chance early, suggesting that there is some serious error or bias in your model.](/images/QQPlot_Image2.png)
![Here is an example where the y-axis is the difference between the observed value and the expected value. Here we can see that the genomic inflation from the previous plot actually starts quite early. Credit to Ellen Wijsman for introducing us to this way of displaying the data ([see Supplementary Figure 3 from Wijsman et al.](https://doi.org/10.1371/journal.pgen.1001308).](/images/QQPlot_Image3.png)
