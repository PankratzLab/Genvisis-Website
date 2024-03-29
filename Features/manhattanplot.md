# ManhattanPlot

Visualize genetic signals across all loci in the genome

ManhattanPlot implements a standard way of visualizing a genome-wide association study and makes it easy to see the strongest genetic signals and the support they have from other variants in linkage disequilibrium with them.

![](/images/ManhattanPlot_Image1.png)
The genomic coordinates are displayed along the x-axis (the numbers are not evenly spaced because some chromosomes are shorter than others). The y-axis shows the strength of each genetic variant (the negative log of the p-value for each variant), with higher values being stronger. Colors alternate by chromosome to better differentiate between chromosomes. The name references the Manhattan skyline, where skyscrapers tower above other buildings.

![](/images/ManhattanPlot_Image2.png)
Genvisis has the ability to automatically filter out variants that are extremely rare (e.g., you could define this as a minor allele frequency < 0.001). Since many studies are not powered to detect variants this rare, this can lead to false positives, sometimes when only a single case has one of these rare variants. Here we can see that there is a lot more noise in the plot if we turn off this feature.

![](/images/ManhattanPlot_Image3.png)
Genvisis can generate Manhattan plots for any data set (e.g., one from an analysis of imputed data); however, if the MarkerName of a variant is present within the current Genvisis project, you can click on the dot to show the name and a link to ScatterPlot, where you can review the raw intensity data for evidence of poor clustering of severe batch effects.

![](/images/ManhattanPlot_Image4.png)
Here is the ScatterPlot image for the lead variant in the previous Manhattan plot, which was for a GWAS where batch one were coded as cases and batch two were coded as controls. We can see that the genotype clustering and call rate are confounded by batch. This variant otherwise passes all other quality control metrics such as call rate and Hardy-Weinberg equilibrium (if only barely) and would have been included in analysis and identified as a significant association, if the batch effect detection step in Genvisis had not been run.