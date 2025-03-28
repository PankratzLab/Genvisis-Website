# AncestryPlot

Visualize the genetic distance between individuals

AncestryPlot displays the result of a standard principal components analysis (PCA). Exploring higher-order PCs can help us distinguish between more closely related populations and identify possible haplotype effects or batch effects that we want to address prior to including these samples in a genetic analysis.

![](/images/AncestryPlot_Image1.png)
For individuals from the United States, typically the first dimension (x-axis) captures the proportion of African DNA and the second (y-axis) captures the proportion of Asian or Native American DNA. We can color-code by the genetically determined population (as defined by Genvisis or some other algorithm) or by self-reported ancestry to see if there are systematic errors in either that you would like to address before running ancestry-specific analyses.

![](/images/AncestryPlot_Image2.png)
For individuals from the United States, typically the third dimension (x-axis) separates the East Asian and Hispanic/Native American samples and the fourth (y-axis) separates South Asian from East Asian.

![](/images/AncestryPlot_Image3.png)
Often we include HapMap samples or merge in data from the 1000 Genomes Project to anchor our understanding of which clusters represent which populations (CEPH samples of European Ancestry in red, Yoruban samples from Nigeria in blue, and Chinese and Japanese samples in green and purple).

![](/images/AncestryPlot_Image4.png)
Sometimes there are patterns in the data representing different batches of genotyping data (i.e., if they were genotyped at different times or versions of the array or if additional cases or controls were downloaded from dbGaP to augment the sample size). If different clusters represent different batches (especially if you were expecting the different studies to have similar ancestral populations), then this is a sign that there are severe batch effects in the clustering of at least a subset of markers and that these markers should be filtered out prior to rerunning the Ancestry step in Genvisis. Markers with batch effects can be identified using the Run Marker QC Metrics step if it is known which samples belong to which batches.

![](/images/AncestryPlot_Image5.png)
If markers are not LD-pruned prior to running the PCA, it is common to see this stereotypical three-cluster plot in one or more of the higher order PCs, which represents 0, 1 or 2 copies of the large haplotype. Performing a GWAS with the PC (or after discretizing it to 0, 1, or 2 copies) as the outcome will reveal which part of the genome this PC is capturing. LD pruning and re-running the PCA will ensure that the primary patterns being captured represent ancestry.

![](/images/AncestryPlot_Image6.png)
If the PCA is not run on unrelated individuals, some of the higher order PCs are liable to capture familial patterns with members of the same family clustering tightly together and far away from the rest of the individuals. Running the PCA on high-quality unrelated individuals and then projecting those loadings onto all individuals (as Genvisis does by default) will protect against this and still ensure that PCs are available for all individuals.
