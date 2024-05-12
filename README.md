# Dive into Deep Learning - Julia

[Dive into Deep Learning](https://d2l.ai/index.html), with Julia programming language and Flux.jl.

This tutorial mainly focuses on using pure julia to implement the code in *Dive into Deep Learning*, rather than explaining the specific principles of deep learning. If you know little about specific principles, please refer to the same chapter of the original book.

## Julia Code Implementation Standard

- Julian: Avoid low-quality code porting, write code in julia way.
- Consistency: Variable and function name as consistent as possible with the original book to facilitate understanding.
- Best Practices: Make all things easy and right.

## Tips

- You don't need too much Julia knowledges to read this book, but you better have learned other programming languages, [chapter preliminaries](https://neroblackstone.github.io/D2lJulia/notebooks/chapter_preliminaries/Data%20Manipulation.html#) covers most of Julia knowledge you needed.
- After reading chapter preliminaries, you can roughly browse the [MLUtils.jl](https://juliaml.github.io/MLUtils.jl/dev/) documentation, which will be of great help to your subsequent data processing.
- Likewise, [MLBase.jl](https://github.com/JuliaStats/MLBase.jl) is another useful ML tool library, good choice for performance evaluation.
- [JuliaML](https://github.com/JuliaML) and [FluxML](https://github.com/FluxML) organization have many useful ML tools. Take a look,there may be a package you are looking for.

## Local installation Pre-requisites

Install `jupyterlab-desktop` or vscode with `jupyter` plugin.

Install `Julia` 1.10:

``` shell
$ julia -v
julia version 1.10.3
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

The website is built using [jupyter-book](https://github.com/executablebooks/jupyter-book). For faster ci build, we close notebook execution. It means you need to execute code cell locally, and save result to notebooks.