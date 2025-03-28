# ScatterPlot

Visualize, annotate, and triage markers one at a time

ScatterPlot displays data for all individuals for a single marker and allows you to annotate and triage markers. For instance, those markers failing a QC metric such as call rate or Hardy-Weinberg equilibrium can be reviewed to see if they could be manually reclustered to rescue the marker. In addition, you can explore and correct batch effects, rescuing many markers with lower-quality data.

![](/images/ScatterPlot_Image1.png)
This is an example of a high-quality variant, with three distinct genotype clusters (which is what we want to see). There is only one black X in this plot, which means that the automated calling algorithm had low confidence for that individual and set their genotype to missing for this marker.

![](/images/ScatterPlot_Image2.png)
This is an example of a poorly clustered marker that Genvisis can rescue. Without a tool like Genvisis, this data would be deemed low quality (call rate < 95%) and thrown away.

![](/images/ScatterPlot_Image3.png)
Changing the color codes to represent batches or quality metrics can reveal patterns in the data that can help you manually cluster the genotypes to increase the call rate and maximize the accuracy of those calls.

![](/images/ScatterPlot_Image4.png)
This is the same marker after being reclustered within Genvisis using ClusterFilters. Note that the call rate is now greater than 95% and the Hardy-Weinberg equilibrium p-value is no longer significant.

![](/images/ScatterPlot_Image5.png)
Example of a marker that is cross-hybridizing to another locus. This is why the clusters have all been shifted upward on the y-axis. Since this y-axis represents the green fluorescence, we can assume that the allele state at the other locus is a G or a C. Since the other locus is monomorphic, and this data can be manually reclustered to fix the genotypes and the Hardy-Weinberg equilibrium. The next time this data set is exported to PLINK or VCF format, the genotypes will reflect this correction.

![](/images/ScatterPlot_Image6.png)
Example of a marker that is cross-hybridizing to another polymorphic locus that creates extra heterozygous genotype clusters. Note the significant deviation from Hardy-Weinberg equilibrium. This marker cannot be rescued.

![](/images/ScatterPlot_Image7.png)
Example of a copy number polymorphism, a common deletion in this case. The cluster of homozygous deletions near the origin of the plot is a dead give away, however the heterozygous deletions are often blurred together with the AA and AB clusters and the automated genotyping algorithm will usually call most or all of these as AA or AB genotypes, which will throw off the Hardy-Weinberg equilibrium. Since this is technically a three-allele system, most analysis packages or imputation pipelines will get tripped up with markers like these.

![](/images/ScatterPlot_Image8.png)
The same copy number polymorphism, color-coded by heatmap coloring reveals the heterozygous deletions clusters better and could help you define a threshold below which a sample is deleted versus copy number two.
