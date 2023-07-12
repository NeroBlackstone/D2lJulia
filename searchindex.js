Search.setIndex({"docnames": ["README", "notebooks/chapter_linear_classification/The Image Classification Dataset", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression", "notebooks/chapter_linear_regression/Linear Regression", "notebooks/chapter_preliminaries/Automatic Differentiation", "notebooks/chapter_preliminaries/Calculus", "notebooks/chapter_preliminaries/Data Manipulation", "notebooks/chapter_preliminaries/Data Preprocessing", "notebooks/chapter_preliminaries/Linear Algebra", "notebooks/chapter_preliminaries/Probability and Statistics"], "filenames": ["README.md", "notebooks/chapter_linear_classification/The Image Classification Dataset.ipynb", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression.ipynb", "notebooks/chapter_linear_regression/Linear Regression.ipynb", "notebooks/chapter_preliminaries/Automatic Differentiation.ipynb", "notebooks/chapter_preliminaries/Calculus.ipynb", "notebooks/chapter_preliminaries/Data Manipulation.ipynb", "notebooks/chapter_preliminaries/Data Preprocessing.ipynb", "notebooks/chapter_preliminaries/Linear Algebra.ipynb", "notebooks/chapter_preliminaries/Probability and Statistics.ipynb"], "titles": ["Dive into Deep Learning - Julia", "<span class=\"section-number\">9. </span>The Image Classification Dataset", "<span class=\"section-number\">8. </span>Concise Implementation of Linear Regression", "<span class=\"section-number\">7. </span>Linear Regression", "<span class=\"section-number\">5. </span>Automatic Differentiation", "<span class=\"section-number\">4. </span>Calculus", "<span class=\"section-number\">1. </span>Data Manipulation", "<span class=\"section-number\">2. </span>Data Preprocessing", "<span class=\"section-number\">3. </span>Linear Algebra", "<span class=\"section-number\">6. </span>Probability and Statistics"], "terms": {"program": [0, 2, 4, 6], "languag": [0, 4, 6, 9], "flux": [0, 2], "jl": [0, 1, 7, 9], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "tutori": 0, "mainli": 0, "focus": 0, "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "pure": 0, "implement": [0, 8, 9], "code": [0, 1, 2, 3, 4, 6, 8], "rather": [0, 2, 3, 4], "than": [0, 1, 2, 3, 4, 6, 9], "explain": 0, "specif": [0, 1, 8, 9], "principl": 0, "If": [0, 6, 8, 9], "you": [0, 1, 2, 4, 6, 7, 8, 9], "know": [0, 4, 9], "littl": 0, "about": [0, 2, 6, 9], "pleas": 0, "refer": [0, 1, 4], "same": [0, 4, 6, 8], "chapter": 0, "origin": [0, 1, 6, 7, 8], "book": [0, 1], "jupyterlab": 0, "desktop": 0, "vscode": 0, "jupyt": 0, "plugin": 0, "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "9": [0, 1, 6, 8], "v": 0, "version": [0, 1], "clone": 0, "project": 0, "chang": [0, 6, 9], "directori": 0, "d2ljulia": 0, "depend": [0, 4, 7, 9], "pkg": 0, "activ": [0, 1], "instanti": [0, 3], "ll": [0, 1], "all": [0, 1, 3, 4, 6, 7, 8, 9], "mai": [0, 6, 9], "take": [0, 1, 4, 6, 7], "few": [0, 1, 8], "minut": 0, "welcom": 0, "just": [0, 4, 6, 8, 9], "add": [0, 3], "ipynb": 0, "file": [0, 7], "notebook": 0, "folder": 0, "creat": [0, 4, 6, 7, 8], "an": [0, 1, 3, 4, 5, 6, 7, 8, 9], "entri": [0, 1, 2, 6, 7], "_toc": 0, "yml": 0, "The": [0, 2, 4, 6, 7, 8, 9], "websit": 0, "built": [0, 1, 8], "For": [0, 1, 2, 4, 6, 7, 8, 9], "faster": [0, 2, 3], "ci": 0, "build": [0, 2, 4, 8, 9], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "close": [0, 2], "execut": 0, "It": [0, 1, 2], "mean": [0, 2, 3, 6, 7, 8], "need": [0, 2, 3, 4, 6, 8, 9], "cell": 0, "save": 0, "result": [0, 4, 6, 8], "One": [1, 4, 8, 9], "wide": 1, "mnist": 1, "lecun": 1, "et": [1, 2, 4], "al": [1, 2, 4], "1998": 1, "handwritten": 1, "digit": 1, "At": [1, 6], "time": [1, 3, 6, 9], "its": [1, 2, 4, 6, 8], "releas": 1, "1990": 1, "pose": 1, "formid": 1, "challeng": 1, "most": [1, 4, 6, 8, 9], "machin": [1, 3, 4, 9], "learn": [1, 2, 3, 4, 7, 9], "algorithm": [1, 4], "consist": [1, 3, 7], "60": 1, "000": [1, 3], "28x28": 1, "pixel": 1, "resolut": 1, "plu": 1, "test": [1, 9], "10": [1, 2, 3, 5, 6, 8], "To": [1, 2, 3, 4, 6, 7, 8, 9], "put": 1, "thing": [1, 3], "perspect": 1, "sun": 1, "sparcstat": 1, "5": [1, 5, 6, 8, 9], "whop": 1, "64mb": 1, "ram": 1, "blister": 1, "mflop": 1, "wa": [1, 4, 9], "consid": [1, 3, 4], "state": 1, "art": 1, "equip": 1, "AT": 1, "t": 1, "bell": 1, "laboratori": 1, "1995": 1, "achiev": 1, "high": [1, 2], "accuraci": 1, "recognit": 1, "kei": 1, "compon": [1, 2, 4, 8], "autom": [1, 2], "letter": 1, "sort": [1, 2], "usp": 1, "deep": [1, 2, 4], "network": [1, 2, 4, 6], "lenet": 1, "support": 1, "vector": [1, 2, 4, 6, 7], "invari": 1, "sch\u00f6lkopf": 1, "1996": 1, "tangent": [1, 5], "distanc": [1, 9], "classifi": 1, "simard": 1, "allow": [1, 2, 6, 8, 9], "reach": 1, "error": [1, 2, 3, 4], "rate": 1, "below": [1, 2, 4, 6, 7, 8], "over": [1, 2, 3, 4, 8], "decad": [1, 2, 4], "serv": 1, "point": [1, 3, 6], "compar": [1, 2], "while": [1, 4, 5, 6, 7, 9], "had": 1, "good": 1, "run": [1, 3, 6, 9], "benchmark": [1, 3], "even": [1, 4, 6, 9], "simpl": 1, "model": [1, 3, 4, 7, 8, 9], "todai": 1, "s": [1, 2, 4, 5, 6, 7, 8, 9], "standard": [1, 2, 3, 6], "95": 1, "make": [1, 4], "unsuit": 1, "distinguish": 1, "between": [1, 6], "stronger": 1, "weaker": 1, "ones": [1, 3, 6, 8, 9], "more": [1, 2, 3, 4, 6, 9], "so": [1, 2, 3, 4, 6], "veri": [1, 4], "level": [1, 2], "typic": [1, 3, 8], "seen": 1, "mani": [1, 3, 6], "problem": [1, 3, 4], "skew": 1, "develop": [1, 3, 4, 5, 9], "toward": [1, 9], "famili": 1, "can": [1, 2, 3, 4, 5, 6, 7, 8, 9], "advantag": [1, 2], "clean": 1, "set": [1, 3, 6, 7, 9], "method": [1, 2, 3, 4, 5, 8], "boundari": 1, "seek": 1, "saniti": 1, "check": [1, 2], "imagenet": 1, "deng": 1, "2009": 1, "much": [1, 2, 3], "relev": 1, "unfortun": 1, "too": 1, "larg": 1, "exampl": [1, 2, 3, 4, 5, 6, 8], "illustr": [1, 3, 4], "would": [1, 9], "long": [1, 4], "train": [1, 3, 4, 7], "interact": 1, "As": [1, 3, 4, 9], "substitut": 1, "focu": [1, 2, 4], "our": [1, 2, 3, 4, 6, 7, 8, 9], "discuss": [1, 6], "come": 1, "section": [1, 2, 4, 7, 8, 9], "qualit": 1, "similar": 1, "smaller": 1, "fashion": [1, 4], "xiao": 1, "2017": 1, "which": [1, 2, 3, 4, 6, 8], "contain": [1, 3, 4, 6, 7], "categori": [1, 3, 7], "cloth": 1, "sinc": [1, 2, 4, 7, 8], "frequent": 1, "major": [1, 6, 9], "framework": [1, 2, 4], "provid": [1, 2, 6, 9], "preprocess": 1, "download": 1, "memori": 1, "mldataset": 1, "env": 1, "datadeps_always_accept": 1, "true": [1, 2, 4, 6, 7, 8, 9], "mnist_train": 1, "fashionmnist": 1, "mnist_test": 1, "metadata": 1, "dict": 1, "string": [1, 7], "ani": [1, 6, 8, 9], "4": [1, 2, 3, 4, 6, 7, 8], "split": [1, 6], "featur": [1, 2, 3, 9], "28": [1, 6, 8], "10000": [1, 3, 5, 9], "arrai": [1, 6, 9], "float32": [1, 2, 6, 8], "3": [1, 2, 3, 4, 5, 6, 7, 8], "target": [1, 3, 7, 9], "element": [1, 4, 6, 7, 8, 9], "int64": [1, 6, 7, 8], "from": [1, 2, 4, 6, 8, 9], "each": [1, 2, 3, 4, 6, 7, 8, 9], "repres": [1, 2, 4, 7, 8], "6": [1, 2, 3, 4, 6, 8], "A": [1, 6, 7, 8], "evalu": [1, 4, 6], "perform": [1, 6, 8], "must": [1, 8], "consequ": 1, "respect": [1, 4, 7], "length": [1, 2, 3, 4, 5, 6, 8], "60000": 1, "binari": [1, 6], "black": [1, 9], "white": 1, "note": [1, 2, 4, 6, 8, 9], "though": [1, 9], "modern": [1, 2, 4], "data": [1, 2, 3, 4, 9], "ha": [1, 2, 4, 8], "channel": 1, "red": 1, "green": 1, "blue": 1, "hyperspectr": 1, "have": [1, 2, 4, 6, 7, 8, 9], "excess": 1, "100": [1, 2, 5, 9], "hymap": 1, "sensor": 1, "126": 1, "By": [1, 2, 8, 9], "convent": 1, "store": [1, 6, 7], "h": [1, 5], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9], "w": [1, 2], "height": 1, "width": 1, "size": [1, 2, 6, 8, 9], "human": 1, "understand": 1, "name": [1, 7], "follow": [1, 2, 4, 6, 8], "convert": [1, 7], "numer": [1, 3, 5, 7], "label": [1, 2, 3, 5, 9], "class_nam": 1, "shirt": 1, "trouser": 1, "pullov": 1, "dress": 1, "coat": 1, "sandal": 1, "sneaker": 1, "bag": 1, "ankl": 1, "boot": 1, "get_fashion_mnist_label": 1, "int": [1, 2, 6], "gener": [1, 4, 5, 8, 9], "function": [1, 5, 6, 8, 9], "see": [1, 5, 9], "how": [1, 2, 4, 7, 9], "work": [1, 2, 4, 6], "let": [1, 2, 4, 5, 7, 9], "invok": [1, 6, 8], "dataload": [1, 2], "18": [1, 6, 8], "mlutil": [1, 2], "train_load": [1, 2], "batchsiz": [1, 2], "64": [1, 6], "shuffl": [1, 2], "938": 1, "tupl": [1, 6, 8], "first": [1, 2, 3, 4, 6, 7, 8, 9], "look": [1, 2], "loader": 1, "blazingli": 1, "fast": [1, 3], "nonetheless": 1, "suffici": 1, "process": [1, 3, 4, 7, 9], "quit": 1, "bit": 1, "longer": 1, "henc": 1, "enough": 1, "io": 1, "constrain": 1, "y": [1, 2, 4, 6, 7, 8], "end": [1, 2, 3, 4, 5, 6], "0": [1, 2, 3, 4, 5, 6, 7, 8, 9], "090352": 1, "second": [1, 3, 6, 8, 9], "23": [1, 6, 8], "06": 1, "k": [1, 3], "alloc": [1, 2, 3, 6], "182": 1, "540": 1, "mib": [1, 3], "17": [1, 6, 8], "56": 1, "gc": 1, "15": [1, 6, 8], "25": [1, 6, 8], "compil": [1, 3], "conveni": [1, 2], "show_imag": 1, "associ": 1, "cairomaki": [1, 3, 5, 9], "imageshow": 1, "real": [1, 2], "column_num": 1, "batch_num": 1, "row_num": 1, "ceil": 1, "fig": [1, 2], "figur": [1, 3], "slice": 1, "i": [1, 2, 6, 9], "zip": [1, 3], "eachslic": 1, "dim": [1, 6, 8], "cartesianindic": 1, "2": [1, 2, 3, 4, 5, 6, 7, 8, 9], "rotr90": 1, "convert2imag": 1, "axi": [1, 3, 6, 8], "aspect": 1, "dataaspect": 1, "titl": 1, "xticksvis": 1, "fals": [1, 6, 7], "xticklabelsvis": 1, "yticksvis": 1, "yticklabelsvis": 1, "In": [1, 2, 3, 4, 6, 7, 8, 9], "idea": [1, 4], "inspect": [1, 2, 6], "re": 1, "ar": [1, 2, 3, 4, 6, 7, 8, 9], "spot": 1, "unusu": 1, "addit": [1, 8], "safeguard": 1, "against": [1, 2], "mistak": 1, "design": [1, 7, 8], "experi": [1, 2, 5, 9], "here": [1, 4, 6, 7, 8, 9], "correspond": [1, 3, 6, 7, 8, 9], "text": [1, 4], "wit": 2, "cambrian": 2, "explos": 2, "past": [2, 4], "sheer": 2, "number": [2, 4, 6, 7, 8, 9], "techniqu": [2, 4], "applic": 2, "far": [2, 4], "surpass": 2, "progress": 2, "previou": [2, 9], "due": 2, "fortuit": 2, "combin": 2, "multipl": [2, 6, 9], "factor": 2, "one": [2, 3, 6, 7, 8, 9], "power": 2, "free": 2, "tool": [2, 8], "offer": [2, 4, 8], "open": [2, 7], "sourc": 2, "theano": 2, "bergstra": 2, "2010": 2, "distbelief": 2, "dean": 2, "2012": 2, "caff": 2, "jia": 2, "2014": 2, "arguabl": 2, "found": 2, "widespread": 2, "adopt": 2, "contrast": [2, 9], "earlier": 2, "semin": 2, "like": [2, 6, 7, 9], "sn2": 2, "simulateur": 2, "neuristiqu": 2, "bottou": 2, "le": 2, "cun": 2, "1988": 2, "lisp": 2, "automat": [2, 6], "differenti": 2, "julia": [2, 3, 6, 8], "These": [2, 7], "modular": 2, "repetit": 2, "gradient": 2, "base": [2, 3, 6, 7], "practic": 2, "becaus": [2, 6, 9], "iter": [2, 4], "neural": [2, 6], "layer": 2, "common": [2, 3, 4, 7], "librari": [2, 3, 4], "well": [2, 4], "show": [2, 4, 6], "api": 2, "low": 2, "dimension": [2, 3, 6, 8], "succinct": 2, "snippet": [2, 4, 6, 8], "drawn": [2, 6], "normal": [2, 6], "distribut": [2, 6, 9], "synthetic_data": 2, "b": [2, 3, 4, 6, 8], "num_exampl": 2, "rand": [2, 9], "0f0": [2, 6, 8], "1f0": 2, "01f0": 2, "return": [2, 4, 6, 9], "reshap": [2, 6, 8], "later": [2, 3], "estim": [2, 3, 7, 9], "paramet": [2, 6, 8], "ground": 2, "truth": 2, "valu": [2, 3, 4, 6, 7, 8, 9], "true_w": 2, "true_b": 2, "4412894": 2, "1683054": 2, "3911616": 2, "98486364": 2, "9546863": 2, "6044618": 2, "8892765": 2, "543286": 2, "5628222349681895": 2, "486395385302604": 2, "9511675149202348": 2, "3048679489642385": 2, "println": 2, "some": [2, 4, 5, 7, 8, 9], "intuit": [2, 5, 9], "minibatch": [2, 3], "both": [2, 4, 6, 8], "input": [2, 4, 7, 8], "likewis": [2, 4, 8], "match": 2, "shape": [2, 4, 6, 8], "given": [2, 6, 7, 9], "batch_siz": 2, "oper": [2, 3, 4, 8], "predefin": 2, "construct": [2, 6, 8], "worri": 2, "recal": [2, 4, 8], "architectur": 2, "singl": [2, 3, 6], "describ": [2, 9], "call": [2, 3, 4, 6, 7, 8, 9], "fulli": 2, "connect": 2, "output": [2, 4, 8], "matrix": [2, 4, 6], "dens": 2, "denot": 2, "neuron": 2, "two": [2, 3, 6, 7, 8, 9], "90m": 2, "39m": 2, "mse": 2, "comput": [2, 3, 6, 8], "squar": 2, "default": [2, 4, 8], "averag": [2, 8], "easier": 2, "own": 2, "descent": 2, "classic": [2, 3], "optimis": 2, "opt": 2, "might": [2, 4, 7, 9], "notic": [2, 6, 7], "express": [2, 8], "through": [2, 4], "requir": [2, 3, 4, 9], "fewer": 2, "line": [2, 3, 5, 7, 9], "did": [2, 9], "individu": [2, 4, 8, 9], "onc": 2, "start": [2, 3, 4, 8, 9], "complex": [2, 4], "grow": [2, 4, 8, 9], "consider": 2, "printf": [2, 5], "num_epoch": 2, "epoch": 2, "f": [2, 3, 4, 5], "n": [2, 3, 5, 8, 9], "381278": 2, "007915": 2, "000265": 2, "finit": [2, 9], "actual": 2, "access": [2, 6, 8], "weight": 2, "bia": 2, "counterpart": 2, "vec": 2, "0016717910766601562": 2, "0073896884918212": 2, "00999946594238299": 2, "pop": 3, "up": [3, 4, 8, 9], "whenev": [3, 7, 9], "want": [3, 4, 6, 8, 9], "predict": [3, 7, 9], "includ": [3, 6], "price": [3, 7], "home": [3, 7], "stock": 3, "etc": 3, "stai": 3, "patient": [3, 9], "hospit": 3, "forecast": 3, "demand": 3, "retail": 3, "sale": 3, "among": [3, 4], "countless": 3, "other": [3, 4, 6], "Not": [3, 7], "everi": [3, 6], "introduc": 3, "classif": 3, "where": [3, 4, 6, 7, 8, 9], "goal": 3, "membership": 3, "suppos": [3, 4], "wish": [3, 4, 6, 8, 9], "hous": 3, "dollar": 3, "area": 3, "feet": 3, "ag": 3, "year": [3, 9], "get": [3, 7, 9], "hand": [3, 4], "terminolog": 3, "dataset": [3, 8, 9], "row": [3, 6, 7, 8], "instanc": [3, 4, 6, 8], "sampl": [3, 6, 9], "try": 3, "variabl": [3, 9], "upon": [3, 7], "covari": 3, "when": [3, 4, 6, 8, 9], "whole": [3, 6], "simultan": 3, "do": [3, 4], "effici": 3, "calcul": [3, 4, 8], "leverag": 3, "algebra": 3, "write": [3, 6, 7], "costli": 3, "loop": [3, 4], "why": 3, "matter": [3, 8], "ad": [3, 8], "reli": 3, "now": [3, 4, 7, 8], "workload": 3, "them": [3, 4, 6], "coordin": 3, "c": [3, 4], "ae": 3, "052413": 3, "151": 3, "62": 3, "379": 3, "88": 3, "12": [3, 4, 6, 8], "altern": 3, "reload": 3, "elementwis": [3, 6, 8], "sum": [3, 4, 6, 9], "d": 3, "000037": 3, "78": [3, 6], "234": 3, "kib": 3, "dramat": 3, "often": [3, 4, 6, 8, 9], "yield": [3, 4], "order": [3, 4, 6], "magnitud": 3, "speedup": 3, "moreov": [3, 9], "push": 3, "mathemat": [3, 5, 8, 9], "without": [3, 6], "ourselv": [3, 9], "reduc": [3, 6, 8], "potenti": 3, "increas": 3, "portabl": 3, "visual": 3, "7": [3, 6, 8], "01": 3, "deviat": [3, 6, 9], "pair": 3, "param": 3, "ax": [3, 5, 8, 9], "xlabel": [3, 5, 9], "ylabel": [3, 5, 9], "p": [3, 9], "xtick": [3, 9], "\u03bc": 3, "\u03c3": 3, "std": 3, "axislegend": [3, 5, 9], "posit": [3, 5, 6], "lt": [3, 5], "deriv": 4, "crucial": 4, "step": [4, 6, 7], "optim": 4, "straightforward": 4, "out": [4, 6, 7, 9], "tediou": 4, "prone": 4, "onli": [4, 6, 8, 9], "becom": [4, 8], "fortun": 4, "off": [4, 9], "plate": 4, "shorten": 4, "autograd": 4, "pass": [4, 8], "success": [4, 9], "graph": 4, "track": 4, "appli": [4, 6, 9], "chain": 4, "rule": [4, 9], "backpropag": 4, "hot": [4, 7], "concern": [4, 9], "thei": [4, 7, 9], "histori": 4, "fact": [4, 8, 9], "earliest": 4, "date": 4, "back": [4, 9], "half": 4, "centuri": 4, "wengert": 4, "1964": 4, "core": 4, "behind": 4, "phd": 4, "thesi": 4, "1980": 4, "speelpen": 4, "were": [4, 9], "further": 4, "late": 4, "griewank": 4, "1989": 4, "option": 4, "emploi": [4, 9], "forward": 4, "propag": 4, "revel": 4, "2016": 4, "befor": [4, 6], "explor": 4, "master": 4, "zygot": 4, "packag": [4, 5, 8], "assign": [4, 6, 8, 9], "initi": [4, 6], "collect": [4, 6, 8, 9], "float64": [4, 6, 7, 8], "defin": [4, 6], "linearalgebra": [4, 8], "2x": [4, 5], "grad": 4, "8": [4, 6, 8], "16": [4, 6, 8], "verifi": 4, "expect": [4, 9], "ident": [4, 6, 9], "4x": [4, 5], "anoth": [4, 9], "natur": 4, "interpret": [4, 9], "jacobian": 4, "partial": 4, "higher": [4, 6], "could": [4, 6], "tensor": 4, "advanc": 4, "commonli": 4, "full": 4, "loss": 4, "separ": [4, 7], "batch": 4, "sometim": [4, 6, 8, 9], "move": 4, "outsid": 4, "record": [4, 7, 8], "sai": [4, 8], "auxiliari": 4, "intermedi": 4, "term": [4, 8], "case": [4, 6], "final": [4, 6], "toi": 4, "clearer": 4, "z": 4, "direct": 4, "influenc": 4, "convei": 4, "via": [4, 6, 7, 8], "new": [4, 6, 9], "u": [4, 8], "whose": [4, 6, 7], "proven": 4, "been": [4, 9], "wipe": 4, "thu": [4, 6], "ancestor": 4, "procedur": [4, 6], "lead": 4, "persist": [4, 7], "review": 4, "path": 4, "lot": 4, "freedom": 4, "condit": [4, 6], "choic": 4, "benefit": 4, "maze": 4, "e": [4, 6, 7, 9], "g": [4, 6, 7, 9], "arbitrari": [4, 8], "still": [4, 6], "statement": [4, 6], "2a": 4, "norm": 4, "1000": 4, "2b": 4, "100b": 4, "random": [4, 9], "what": [4, 6, 9], "form": [4, 6], "randn": [4, 6], "dynam": 4, "vital": 4, "statist": [4, 7, 8], "imposs": 4, "priori": 4, "3x": 5, "lack": 5, "rigor": 5, "proof": 5, "soon": 5, "inde": 5, "5f": 5, "limit": 5, "30000": 5, "01000": 5, "03000": 5, "00100": 5, "00300": 5, "00010": 5, "00030": 5, "00001": 5, "00003": 5, "slope": 5, "maki": 5, "rang": [5, 6], "fg": [5, 9], "linestyl": [5, 9], "dash": [5, 9], "unitrang": [6, 8], "syntax": 6, "also": [6, 7, 8], "argument": [6, 9], "differ": [6, 9], "11": [6, 8], "equival": [6, 8], "signific": 6, "shorthand": 6, "along": [6, 8], "dimens": [6, 8], "specifi": [6, 8], "deal": 6, "total": [6, 8], "alter": 6, "transform": 6, "retain": 6, "laid": 6, "column": [6, 7, 8], "permut": 6, "permutedim": 6, "transpos": [6, 8], "4x3": 6, "eltyp": [6, 8], "alia": 6, "either": [6, 7], "list": 6, "product": 6, "equal": 6, "multi": [6, 8], "x2": 6, "view": 6, "copi": [6, 8], "zero": 6, "similarli": 6, "randomli": 6, "independ": 6, "probabl": 6, "gaussian": 6, "0725183": 6, "383395": 6, "87141": 6, "51073": 6, "33734": 6, "74673": 6, "600773": 6, "4579": 6, "300499": 6, "348163": 6, "58002": 6, "50599": 6, "suppli": 6, "exact": 6, "last": 6, "begin": [6, 9], "unfold": 6, "select": [6, 7], "And": [6, 9], "third": 6, "realiti": 6, "36": [6, 8], "13": [6, 8], "27": 6, "29": 6, "matric": 6, "21": [6, 8], "33": 6, "22": [6, 8], "34": 6, "35": 6, "24": [6, 8], "30": 6, "dot": 6, "unari": 6, "exp": 6, "7182817": 6, "20": [6, 8], "085537": 6, "54": 6, "59815": 6, "148": 6, "41316": 6, "403": 6, "4288": 6, "1096": 6, "6332": 6, "2980": 6, "958": 6, "8103": 6, "084": 6, "22026": 6, "467": 6, "59874": 6, "14": [6, 7, 8], "162754": 6, "concaten": 6, "togeth": 6, "stack": 6, "larger": 6, "tell": [6, 9], "system": 6, "happen": [6, 7, 9], "vcat": 6, "hcat": 6, "block": 6, "diagon": 6, "cat": 6, "logic": 6, "j": 6, "otherwis": 6, "bitmatrix": 6, "under": [6, 9], "certain": 6, "mechan": [6, 8], "accord": 6, "expand": 6, "after": [6, 8, 9], "ii": [6, 9], "caus": 6, "host": 6, "derefer": 6, "instead": 6, "newli": 6, "demonstr": [6, 7], "issu": 6, "objectid": 6, "mutabl": 6, "composit": 6, "type": [6, 7, 8, 9], "object": [6, 9], "locat": [6, 7], "That": [6, 9], "howev": 6, "place": 6, "updat": [6, 9], "pars": 6, "fuse": 6, "csv": 7, "datafram": 7, "featuretransform": 7, "comma": 7, "ubiquit": 7, "tabular": 7, "spreadsheet": 7, "sever": 7, "field": [7, 9], "albert": 7, "einstein": 7, "march": 7, "1879": 7, "ulm": 7, "feder": 7, "polytechn": 7, "school": 7, "accomplish": 7, "gravit": 7, "physic": 7, "load": [7, 8], "house_tini": 7, "distinct": [7, 8], "room": 7, "numroom": 7, "roof": 7, "rooftyp": 7, "csv_data": 7, "127500": 7, "106000": 7, "slate": 7, "178100": 7, "140000": 7, "dir_path": 7, "joinpath": 7, "file_path": 7, "mkpath": 7, "iobuff": 7, "import": 7, "dataframerownumroomsrooftypepriceint64": 7, "string7": 7, "int641missingmissing12750022missing10600034slate1781004missingmissing140000": 7, "supervis": [7, 9], "versu": 7, "integ": 7, "index": [7, 8], "replac": 7, "special": 7, "miss": 7, "empti": 7, "270000": 7, "bed": 7, "bug": 7, "scienc": 7, "menac": 7, "confront": 7, "throughout": 7, "your": 7, "career": [7, 9], "context": 7, "handl": 7, "imput": 7, "delet": 7, "simpli": [7, 8], "discard": 7, "those": 7, "heurist": 7, "categor": 7, "treat": 7, "rooftype_sl": 7, "rooftype_miss": 7, "hold": 7, "uniqu": [7, 9], "roof_typ": 7, "encod": 7, "append": 7, "apply_append": 7, "onehotencod": 7, "col": 7, "header": 7, "rooftype_": 7, "drop": [7, 8], "dataframerownumroomsrooftype_missingrooftype_slateint64": 7, "boolbool1missingtruefalse22truefalse34falsetrue4missingtruefals": 7, "skipmiss": 7, "dataframerownumroomsrooftype_missingrooftype_slatefloat64boolbool13": 7, "0truefalse22": 7, "0truefalse34": 7, "0falsetrue43": 7, "0truefals": 7, "displai": [7, 8], "manipul": 8, "sophist": 8, "gentl": 8, "introduct": 8, "essenti": 8, "concept": 8, "ramp": 8, "familiar": 8, "divis": 8, "exponenti": 8, "purpos": 8, "think": [8, 9], "fix": 8, "indic": 8, "appropri": 8, "m": 8, "desir": 8, "adjoint": 8, "symmetr": 8, "attribut": 8, "analog": 8, "19": 8, "handi": 8, "produc": 8, "operand": 8, "hadamard": 8, "multipli": 8, "26": 8, "should": [8, 9], "dropdim": 8, "singleton": 8, "although": 8, "relat": 8, "quantiti": 8, "divid": [8, 9], "part": 8, "5f0": 8, "1x3": 8, "keep": 8, "unchang": 8, "broadcast": 8, "behavior": 8, "sum_a": 8, "111111": 8, "333333": 8, "555556": 8, "166667": 8, "cumul": 8, "cumsum": [8, 9], "doe": 8, "fundament": 8, "tab": 8, "complet": 8, "cdot": 8, "repl": 8, "obtain": 8, "simplifi": 8, "confus": 8, "ell_2": 8, "ell_1": 8, "frobeniu": 8, "wai": 9, "uncertainti": 9, "someth": 9, "unknown": 9, "known": 9, "attempt": 9, "Or": 9, "smallest": 9, "quantifi": 9, "suffer": 9, "heart": 9, "attack": 9, "next": 9, "unsupervis": 9, "care": 9, "determin": 9, "whether": 9, "measur": 9, "anomal": 9, "help": 9, "observ": 9, "popul": 9, "interest": 9, "reinforc": 9, "agent": 9, "act": 9, "intellig": 9, "variou": 9, "environ": 9, "reason": 9, "reward": 9, "encount": 9, "respons": 9, "avail": 9, "action": 9, "probabilist": 9, "likelihood": 9, "event": 9, "frequenc": 9, "repeat": 9, "fairli": 9, "uncontroversi": 9, "frequentist": 9, "scholar": 9, "adher": 9, "bayesian": 9, "broadli": 9, "formal": 9, "character": 9, "degre": 9, "belief": 9, "non": 9, "moon": 9, "made": 9, "chees": 9, "subject": 9, "unambigu": 9, "light": 9, "evid": 9, "prior": 9, "backward": 9, "organ": 9, "infer": 9, "draw": 9, "analyz": 9, "hunt": 9, "pattern": 9, "hope": 9, "broader": 9, "cours": 9, "theses": 9, "depart": 9, "compani": 9, "institut": 9, "devot": 9, "studi": 9, "scratch": 9, "surfac": 9, "foundat": 9, "float": 9, "greater": 9, "num_toss": 9, "head": 9, "_": 9, "tail": 9, "print": 9, "59": 9, "41": 9, "simul": 9, "possibl": 9, "outcom": 9, "roll": 9, "die": 9, "binomi": 9, "trial": 9, "omit": 9, "ten": 9, "fair": 9, "occurr": 9, "receiv": 9, "give": 9, "intend": 9, "count": 9, "drew": 9, "saw": 9, "slightli": 9, "unfair": 9, "artifact": 9, "small": 9, "4979": 9, "5021": 9, "evolv": 9, "cum_count": 9, "hline": 9, "color": 9, "ytick": 9, "2000": 9, "solid": 9, "curv": 9, "turn": 9, "group": 9, "underli": 9, "conduct": 9, "converg": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dive": 0, "deep": 0, "learn": 0, "julia": [0, 4], "local": 0, "instal": 0, "pre": 0, "requisit": 0, "contribut": 0, "The": [1, 3], "imag": 1, "classif": 1, "dataset": [1, 2, 7], "load": 1, "read": [1, 2, 7], "minibatch": 1, "visual": [1, 5], "concis": 2, "implement": 2, "linear": [2, 3, 8], "regress": [2, 3], "gener": 2, "defin": 2, "model": 2, "loss": [2, 3], "function": [2, 4], "optim": 2, "algorithm": 2, "train": 2, "vector": [3, 8], "speed": 3, "normal": 3, "distribut": 3, "squar": 3, "automat": 4, "differenti": [4, 5], "A": [4, 9], "simpl": [4, 9], "backward": 4, "non": [4, 8], "scalar": [4, 8], "variabl": 4, "detach": 4, "comput": 4, "gradient": 4, "control": 4, "flow": 4, "calculu": 5, "deriv": 5, "util": 5, "data": [6, 7], "manipul": 6, "get": 6, "start": 6, "index": 6, "slice": 6, "oper": 6, "broadcast": 6, "save": 6, "memori": 6, "preprocess": 7, "prepar": 7, "convers": 7, "matrix": [7, 8], "algebra": 8, "matric": 8, "arrai": 8, "basic": 8, "properti": 8, "arithmet": 8, "reduct": 8, "sum": 8, "dot": 8, "product": 8, "multipl": 8, "norm": 8, "probabl": 9, "statist": 9, "exampl": 9, "toss": 9, "coin": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})