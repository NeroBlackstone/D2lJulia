# Dive into Deep Learning - Julia

[Dive into Deep Learning](https://d2l.ai/index.html), with Julia programming language and Flux.jl.

This tutorial mainly focuses on using pure julia to implement the code in *Dive into Deep Learning*, rather than explaining the specific principles of deep learning. If you know little about specific principles, please refer to the same chapter of the original book.

## Local installation Pre-requisites

Install `jupyterlab-desktop` or vscode with `jupyter` plugin.

Install `Julia` 1.9:

``` shell
$ julia -v
julia version 1.9.1
```

Clone this project and change directory to `D2lJulia` and install dependencies:

``` shell
$ julia
julia> using Pkg
julia> Pkg.activate("./")
julia> Pkg.instantiate()
```

You'll install all the dependencies, this may take a few minutes.

## Contribution

Welcome to contribution! Just add `.ipynb` file in `notebooks` folder and create an entry in `_toc.yml`.

The website is built using [jupyter-book](https://github.com/executablebooks/jupyter-book). 