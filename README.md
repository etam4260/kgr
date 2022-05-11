
<!-- README.md is generated from README.Rmd. Please edit that file -->

# kgr <img src='man/figures/logo.png' align="right" width="139"/>

<!-- badges: start -->

[![Project Status: WIP – Initial development is in progress, but there
has not yet been a stable, usable release suitable for the
public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![Lifecycle:
maturing](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![devel
version](https://img.shields.io/badge/devel%20version-0.1.0.9000-yellow)]()

<!-- badges: end -->

The goal of kgr is to provide an interface for building and maintaining
knowledge graphs in R. Knowledge graphs are powerful data structures for
representing relationships among entities. Currently R and RStudio lack
the tools necessary for working with knowledge graphs: this is where kgr
will shine.

kgr provides a GUI for creating knowledge graphs directly in RStudio and
allows users to directly link to their data. It also allows users to
easily define and store their data frames and tibbles in a graph like
structures.

Users are able to export their knowledge graphs to tools such as neo4j
or save it directly into their local environment for future use. This
tool also provides access to common graph algorithms and graph munging
tools.

kgr provides support for Cypher and SPARQL query languages.

## The Growing Trend of Knowledge Graphs

Knowledge graphs have gained a lot of attention in the field of
artificial intelligence and natural language processing. Harvesting
knowledge from large amounts of data relies on technology which can
interpret relationships among entities efficiently. the ability to embed
knowledge is important for knowledge representation. The rising
popularity of knowledge graphs are due to their high compatible with
deep learning methods which have led to breakthrough technologies in
many fields.

According to Noy et al, they are critical to many enterprises and
provide structured data and knowledge that drives products and make them
smarter.

## Knowledge Graphs versus Relational Databases

Knowledge graphs are used by Google to enhance its search engine’s
results with information from a wide variety of sources.

Contemporary information systems in various sectors currently use DBMS
or relational databases as part of their business systems.

Relational databases have their place in the world of data management,
but has led to a growing problem of data silos Furthermore, operations
on relational databases are expensive when compared to graph databases
because of expensive join operations which are memory and
computationally heavy.

Graph databases, however, utilize the connection of nodes and
relationships in a connected graph, making it simple to build models
which closely follow a problem domain. This allows a user to query and
map data from many perspectives. The incorporation of relationships into
the data structure allows for very fast query times. Furthermore, graphs
provide more flexibility and are not bounded by strict table or column
layouts.

## Installation

You can install the development version of kgr like so:

``` r
# install.packages("devtools")
devtools::install_github("etam4260/kgr")
```

For more information on how to setup and use this package, please visit
\[\] and click on \[Setup\] on the top navigation bar.

## References

Bellomarini, L., Fakhoury, D., Gottlob, G., & Sallinger, E. (2019,
April).  
        Knowledge graphs and enterprise AI: the promise of an enabling
technology.  
        In 2019 IEEE 35th International Conference on Data Engineering
(ICDE) (pp. 26-37). IEEE.

Elfaki, A., Aljaedi, A., & Duan, Y. (2019, July). Mapping ERD to
knowledge graph.  
        In 2019 IEEE World Congress on Services (SERVICES) (Vol. 2642,
pp. 110-114). IEEE.

Neo4j (2012). Neo4j - The World’s Leading Graph Database
