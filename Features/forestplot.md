# ForestPlot

Compare the relative effect sizes of different genetic signals

ForestPlot implements a standard way of visualizing the relative effect sizes of genetic variants across multiple strata. This could be for the same phenotype across multiple studies or across multiple phenotypes for the same study, with the effect estimate of the meta-analysis shown as a diamond. It could also be used to demonstrate the relative contribution of multiple variants to a polygenic risk score.

![Image Description](/images/ForestPlot_Image1.png)
The CHARGE Consortium Hematology Working Group used Genvisis to make <a href="https://doi.org/10.1038/ng.3607">this forest plot</a> for a variant in S1PR4 that displays the relative effect sizes for each cohort in the discovery and replication sets. The area of each square is proportional to the study's size and therefore influence in the inverse variance-weighted meta-analysis. We can see that most studies individually did not have the statistical power to reach significance (the confidence interval overlaps the vertical line representing no effect); however, all but two studies showed a consistent direction of effect and the meta-analysis reached genome-wide significance.

![Image Description](/images/ForestPlot_Image2.png)
[Marcotte et al.](https://doi.org/10.1002/gcc.22457) used Genvisis to create this forest plot for a variant near SPRY4 that had been previously linked to adult testicular cancer and demonstrated that the association was not only generalizable to pediatric testicular cancer but also to other germ cell tumors cancers. Here we see that the association is even stronger for ovarian cancer than testicular cancer (though the confidence intervals are large and overlapping).

![Image Description](/images/ForestPlot_Image3.png)
Again [Marcotte et al.](https://doi.org/10.1002/gcc.22457) used Genvisis to create this forest plot for a variant near BAK1 that had been previously linked to adult testicular cancer. They found that the overall meta-analysis of pediatric germ cell tumors was largely driven by testicular cancer in boys after they reached puberty and that the associations with other germ cell tumors cancers was minimal (albeit in the same direction).
