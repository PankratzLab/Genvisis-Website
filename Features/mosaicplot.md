# MosaicPlot

Detect mosaic chromosomal alterations (mCAs)

MosaicPlot visualizes all chromosomal arms for all samples at once. The outliers (the colored dots) indicate chromosomal arms where a subset of their cells (such a mixture is called a mosaic) have been deleted or duplicated or have evidence of uniparental disomy. These mCAs may increase the risk of disease, especially cancer, and may also cause genotyping errors.

![](/images/MosaicPlot_Image1.png)
By analyzing B allele frequency (BAF) distributions, we can efficiently identify mosaic chromosomal alterations agnostically throughout the genome. These calls can then be visualized individually in Trailer or together using MosaicPlot, as seen in [this image from Kirkpatrick et al.](https://doi.org/10.1016/j.intell.2013.11.005) that shows large mosaic deletions and duplications (in red); mild mosaicism (green); large tracts of homozygosity (purple) that are biasing the BAF statistics; and large duplications (0.5–6 Mb in size) (blue). Normal chromosomal arm BAF distributions are visualized in black.

![](/images/MosaicPlot_Image2.png)
Here is an example of a mosaic event. Given that there is no drop in the log R ratio, this is either a copy number neutral event or a mosaic deletion/duplication with such low percent mosaicism that the average log R ratio is not significantly different from zero.

![](/images/MosaicPlot_Image3.png)
Sometimes events affect less than 10% of the chromosomal arm and may not be an obvious outlier on MosaicPlot. Here is an example of an event visualized in Trailer that was identified using the agnostic genome-wide caller.

![](/images/MosaicPlot_Image4.png)
Most DNA samples that we analyze come from whole blood, and even the DNA from buccal and saliva samples come in a large part from white blood cells. Since our bodies generate a million white blood cells every second, it’s no surprise that on that scale serious mistakes in DNA replication will be made given enough years. As we age, our blood cells frequently collect large chromosomal alterations that often span an entire chromosome.

![](/images/MosaicPlot_Image5.png)
We can plot the percentage of cells affected by the change in log R ratio to identify which events are deletions or duplications and which events are copy number neutral.
