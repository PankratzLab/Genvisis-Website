# Trailer

Visualize, annotate, and triage samples one at a time

Trailer displays data for all markers for one individual and allows you to differentiate between good and bad copy number variant (CNV) calls, overlay the results from different CNV callers, and visualize different transformations of the data (e.g., GC correction). You can also interrogate aneuploidies, large mosaic events, and contamination and sample quality.

![](/images/Trailer_Image1.png)
Trailer displays all data for a single sample, one chromosome at a time. The upper panel contains the log R ratio values, which are the normalized measure of signal intensity at each locus. The lower panel contains the B allele frequency values, which estimate the proportion of alleles that are the B allele. For most regions of the genome, there will be two copies of each allele (one from our mother and one from our father) so the typical values are 0.00 (AA genotype), 0.50 (AB), and 1.00 (BB).

![](/images/Trailer_Image2.png)
This is a good deletion call, where entire genes are missing from one chromosome. Note the drop in intensity and lack of heterozygous genotypes (red dots) on the upper log R ratio plot, as well as the disappearance of the middle line on the lower B allele frequency (BAF) plot. If each locus typically has two alleles and one of them is deleted (a null allele), then the BAF values for the variants within the deleted region can only be 0.00 (A/null) or 1.00 (B/null). In fact, if there are lots of BAF values in the middle, then this is evidence either that the deletion call is a false positive or that the event is somatic and mosaic in the individual (i.e., the deletion is only present in a subset of cells).

![](/images/Trailer_Image3.png)
This is a good duplication call, where there is an extra copy of a region of the chromosome. Note the increase in intensity of the log R ratio values on top and the split in the middle distribution of the B allele frequencies on the bottom (because now the individual will have AAA = 0.00; AAB = 0.33; ABB = 0.67; or BBB = 1.00).

![](/images/Trailer_Image4.png)
This is a good triplication call, where there are two extra copies of a region of the chromosome. The log R ratio values on top will be even higher, and the middle distribution of the B allele frequencies on the bottom will split into three (because now the individual can have AAAA = 0.00; AAAB = 0.25; AABB = 0.50; ABBB = 0.75; or BBBB = 1.00).

![](/images/Trailer_Image5.png)
Contrast regions with a clean heterozygous deletion call (A; no red dots) with those of a bad or mosaic call (B; dip but has red dots).

![](/images/Trailer_Image6.png)
Trailer can be used to identify aneuploidies, such as trisomy 21 (Down syndrome). Note that the log R ratio plots tend to be above the gray line and that the B allele frequency distribution matches that of a regular duplication but for the entire chromosome.

![](/images/Trailer_Image7.png)
Trailer can be used to identify contaminated samples. Note that the log R ratio distribution looks fairly normal, but the B allele frequency distribution has the same five states as the triplication (four total alleles at every locus) but for every region of every chromosome.

![](/images/Trailer_Image8.png)
Trailer can be used to confirm that a sample is of lower quality. Both the log R ratio distribution and the B allele frequency distribution will be messier. Computing the standard deviation of the log R ratio will reveal these samples to be outliers, which is why this is a quality metric that correlates well with the genotyping call rate. The degree of noise in the intensity data is more relevant for calling CNVs than for calling SNP genotypes, so we will usually apply a more stringent log R ratio standard deviation for determining which samples are analyzed in CNV analyses compared to SNP analyses. Lower quality samples are often excluded from primary analyses (which are often restricted to samples with genotype call rates >95% or even >98%), but they may still hold useful information for specific regions of interest. This can be determined by visualizing the data in ScatterPlot for highly relevant SNPs.

![](/images/Trailer_Image9.png)
Trailer also makes it clear when there is a total sample failure and no genotypes should be trusted for a particular sample.
