# CustomPlot

Visualize values for any variable two at a time

CustomPlot allows you to plot any two variables from any file, including variables in different files that can be linked by sample ID, and to color-code them by any variable found in SampleData. Moreover, if there are sample ID and genomic location columns in the file (or if the name of the file is a genomic location), then clicking on a dot will open Trailer for that region of that individual.

![](/images/CustomPlot_Image1.png)
The MedianLRR widget in Genvisis will determine all of the probes or bins within a region and compute various metrics for the LRR and BAF values across all individuals. Here is an example of a clean set of deletion and duplication calls, color-coded by what was called within the Genvisis CNV caller. The choice of variable for the other axis is up to you, but we default to the median absolute difference (MAD) as a measure of spread. We expect the spread to be large for the homozygous deletions on the left side (in red), but if this value is high for a different state, it is likely evidence of a lower quality sample where the genotype might be less accurate.

![](/images/CustomPlot_Image2.png)
The MedianLRR widget can be called directly from within Trailer or ScatterPlot, and will pre-populate the chromosome start and stop positions for the current genomic region being displayed. This is a useful way to determine if a region with evidence of a copy number variant is truly an outlier or if the signal in this region is just noisy. In addition to these automatically generated files, you can also visualize the contents of any file that you make yourself.

![](/images/CustomPlot_Image3.png)
Here is the ScatterPlot image of one of the markers within the common CNV region in the first plot. As you can see, it is often difficult to demarcate where the heterozygous deletions end and the normal copy number two state begins. However, if we take the average across multiple consecutive markers, the MedianLRR values, especially if they have been batch corrected using intensity-based principal components, can become distinct. This allows us to confirm calls made by a CNV caller and can help us identify false negatives (things the CNV caller missed).

![](/images/CustomPlot_Image4.png)
This is an example in which the clusters are less distinct, either because the underlying probes are too messy (and may not even represent a true CNV) or because the region is small and relatively few probes overlap it. When we see a pattern like this, we must understand that there is likely to be more misclassification than usual and an alternative genotyping approach such as qPCR or ddPCR may be needed to both validate the finding and improve the accuracy of the calls for a variant that has potential to explain disease risk.

![](/images/CustomPlot_Image5.png)
Examples of how PC correction improves our ability to discriminate the different clusters.

![](/images/CustomPlot_Image6.png)
Examples of how other color codes can be useful (e.g., LRR_SD or WF).
