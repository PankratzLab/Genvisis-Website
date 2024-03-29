# SexPlot

Determine how many X and Y chromosomes each person has

SexPlot displays the median log R ratio for the X chromosome on the x-axis and for the Y chromosome on the y-axis. Genvisis will categorize each individual as XX, XY, XO, XXX, XXY, XXYY, or XYY (including mosaic versions of each of these), and clicking on an individual will link to the Trailer module so you can visually confirm these assignments.

![](/images/SexPlot_Image1.png)
SexPlot computes the median LRR on chrX and chrY using only probes that do not cross-hybridize to the other chromosome. Here we can see that Genvisis identifies ten combinations of the number of X and Y chromosomes and their mosaic states within the UK Biobank dataset. Such sex chromosomal aneuploidies are rare, however, and your data set may have just a couple Turner or Klinefelter cases, if any at all.

![](/images/SexPlot_Image2.png)
Clicking on an individual within SexPlot will open up two instances of Trailer, one for the X chromosome (chr23) and one for the Y chromosome (chr24). Here we can see an example of a Klinefelter case, where the individual has two copies of the X chromosome as well as one copy of the Y chromosome. Note the duplication pattern, where there is a split of the middle BAF band within the pseudo-autosomal regions (PAR1 on the left side and PAR2 on the right side and the XTR region in the middle), indicating three copies of these regions (two on the X and one on the Y).

![](/images/SexPlot_Image3.png)
Here is an example of a Klinefelter case, where the individual is homozygous for all markers on the X chromosome. While the homozygous genotypes look very similar to an XY male and would be missed by a heterozygosity based typing method, the split of the middle BAF band within the pseudo-autosomal regions confirms that the high median LRR is correct and that there are three copies of these regions (two on the X and one on the Y).

![](/images/SexPlot_Image4.png)
Here is an example of a mosaic Turner case, where the individual’s median LRR for the markers on the X chromosome is low and there is a split of the middle BAF band. The distance between these two middle bands indicates what percentage of cells have the X chromosome deleted and how many have two copies. Genvisis will estimate an F statistic that estimates this proportion.
