Search.setIndex({"docnames": ["README", "notebooks/chapter_linear_classification/Concise Implementation of Softmax Regression", "notebooks/chapter_linear_classification/The Image Classification Dataset", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression", "notebooks/chapter_linear_regression/Linear Regression", "notebooks/chapter_preliminaries/Automatic Differentiation", "notebooks/chapter_preliminaries/Calculus", "notebooks/chapter_preliminaries/Data Manipulation", "notebooks/chapter_preliminaries/Data Preprocessing", "notebooks/chapter_preliminaries/Linear Algebra", "notebooks/chapter_preliminaries/Probability and Statistics"], "filenames": ["README.md", "notebooks/chapter_linear_classification/Concise Implementation of Softmax Regression.ipynb", "notebooks/chapter_linear_classification/The Image Classification Dataset.ipynb", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression.ipynb", "notebooks/chapter_linear_regression/Linear Regression.ipynb", "notebooks/chapter_preliminaries/Automatic Differentiation.ipynb", "notebooks/chapter_preliminaries/Calculus.ipynb", "notebooks/chapter_preliminaries/Data Manipulation.ipynb", "notebooks/chapter_preliminaries/Data Preprocessing.ipynb", "notebooks/chapter_preliminaries/Linear Algebra.ipynb", "notebooks/chapter_preliminaries/Probability and Statistics.ipynb"], "titles": ["Dive into Deep Learning - Julia", "<span class=\"section-number\">10. </span>Concise Implementation of Softmax Regression", "<span class=\"section-number\">9. </span>The Image Classification Dataset", "<span class=\"section-number\">8. </span>Concise Implementation of Linear Regression", "<span class=\"section-number\">7. </span>Linear Regression", "<span class=\"section-number\">5. </span>Automatic Differentiation", "<span class=\"section-number\">4. </span>Calculus", "<span class=\"section-number\">1. </span>Data Manipulation", "<span class=\"section-number\">2. </span>Data Preprocessing", "<span class=\"section-number\">3. </span>Linear Algebra", "<span class=\"section-number\">6. </span>Probability and Statistics"], "terms": {"program": [0, 3, 5, 7], "languag": [0, 5, 7, 10], "flux": [0, 1, 3], "jl": [0, 2, 8, 10], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "tutori": 0, "mainli": 0, "focus": 0, "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "pure": 0, "rather": [0, 3, 4, 5], "than": [0, 2, 3, 4, 5, 7, 10], "explain": 0, "specif": [0, 2, 9, 10], "principl": 0, "If": [0, 7, 9, 10], "you": [0, 2, 3, 5, 7, 8, 9, 10], "know": [0, 5, 10], "littl": 0, "about": [0, 3, 7, 10], "pleas": 0, "refer": [0, 2, 5], "same": [0, 5, 7, 9], "chapter": 0, "origin": [0, 2, 7, 8, 9], "book": [0, 2], "julian": 0, "avoid": [0, 1], "low": [0, 3], "qualiti": 0, "port": 0, "write": [0, 4, 7, 8], "wai": [0, 10], "consist": [0, 2, 4, 8], "variabl": [0, 4, 10], "function": [0, 1, 2, 6, 7, 9, 10], "name": [0, 2, 8], "possibl": [0, 10], "facilit": 0, "understand": [0, 2], "best": 0, "practic": [0, 3], "make": [0, 2, 5], "all": [0, 1, 2, 4, 5, 7, 8, 9, 10], "thing": [0, 1, 2, 4], "easi": 0, "right": 0, "don": 0, "t": [0, 2], "need": [0, 3, 4, 5, 7, 9, 10], "too": [0, 2], "much": [0, 2, 3, 4], "knowledg": 0, "read": 0, "better": 0, "have": [0, 2, 3, 5, 7, 8, 9, 10], "other": [0, 4, 5, 7], "preliminari": 0, "cover": 0, "most": [0, 2, 5, 7, 9, 10], "after": [0, 7, 9, 10], "can": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10], "roughli": 0, "brows": 0, "mlutil": [0, 1, 2, 3], "document": 0, "which": [0, 1, 2, 3, 4, 5, 7, 9], "great": 0, "help": [0, 10], "your": [0, 8], "subsequ": 0, "data": [0, 1, 2, 3, 4, 5, 10], "process": [0, 2, 4, 5, 8, 10], "likewis": [0, 3, 5, 9], "mlbase": 0, "anoth": [0, 5, 10], "ml": 0, "tool": [0, 3, 9], "librari": [0, 3, 4, 5], "good": [0, 2], "choic": [0, 5], "perform": [0, 2, 7, 9], "evalu": [0, 1, 2, 5, 7], "juliaml": 0, "fluxml": 0, "organ": [0, 10], "mani": [0, 2, 4, 7], "take": [0, 2, 5, 7, 8], "look": [0, 2, 3], "mai": [0, 7, 10], "packag": [0, 5, 6, 9], "ar": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "jupyterlab": 0, "desktop": 0, "vscode": 0, "jupyt": 0, "plugin": 0, "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "9": [0, 1, 2, 7, 9], "v": 0, "version": [0, 2], "clone": 0, "project": 0, "chang": [0, 7, 10], "directori": 0, "d2ljulia": 0, "depend": [0, 5, 8, 10], "pkg": 0, "activ": [0, 2], "instanti": [0, 4], "ll": [0, 2], "few": [0, 2, 9], "minut": 0, "welcom": 0, "just": [0, 1, 5, 7, 9, 10], "add": [0, 4], "ipynb": 0, "file": [0, 8], "notebook": 0, "folder": 0, "creat": [0, 5, 7, 8, 9], "an": [0, 2, 4, 5, 6, 7, 8, 9, 10], "entri": [0, 2, 3, 7, 8], "_toc": 0, "yml": 0, "The": [0, 3, 5, 7, 8, 9, 10], "websit": 0, "built": [0, 1, 2, 9], "For": [0, 2, 3, 5, 7, 8, 9, 10], "faster": [0, 3, 4], "ci": 0, "build": [0, 3, 5, 9, 10], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "close": [0, 3], "execut": 0, "It": [0, 2, 3], "mean": [0, 3, 4, 7, 8, 9], "cell": 0, "save": 0, "result": [0, 5, 7, 9], "high": [1, 2, 3], "level": [1, 2, 3], "deep": [1, 2, 3, 5], "learn": [1, 2, 3, 4, 5, 8, 10], "framework": [1, 2, 3, 5], "made": [1, 10], "easier": [1, 3], "linear": 1, "see": [1, 2, 6, 10], "section": [1, 2, 3, 5, 8, 9, 10], "3": [1, 2, 3, 4, 5, 6, 7, 8, 9], "5": [1, 2, 6, 7, 9, 10], "thei": [1, 5, 8, 10], "similarli": [1, 7], "conveni": [1, 2, 3], "here": [1, 2, 5, 7, 8, 9, 10], "As": [1, 2, 4, 5, 10], "construct": [1, 3, 7, 9], "our": [1, 2, 3, 4, 5, 7, 8, 9, 10], "fulli": [1, 3], "connect": [1, 3], "layer": [1, 3], "flatten": 1, "reshap": [1, 3, 7, 9], "arbitrarli": 1, "shape": [1, 3, 5, 7, 9], "input": [1, 3, 5, 8, 9], "matrix": [1, 3, 5, 7], "output": [1, 3, 5, 9], "preserv": 1, "size": [1, 2, 3, 7, 9, 10], "last": [1, 7], "dimens": [1, 7, 9], "chain": [1, 5], "dens": [1, 3], "28": [1, 2, 7, 9], "10": [1, 2, 3, 4, 6, 7, 9], "784": 1, "90m": [1, 3], "7_850": 1, "paramet": [1, 3, 7, 9], "39m": [1, 3], "both": [1, 3, 5, 7, 9], "overflow": 1, "underflow": 1, "want": [1, 4, 5, 7, 9, 10], "keep": [1, 9], "convent": [1, 2], "handi": [1, 9], "case": [1, 5, 7], "ever": 1, "probabl": [1, 7], "But": 1, "instead": [1, 7], "pass": [1, 5, 9], "new": [1, 5, 7, 10], "loss": [1, 5], "logit": 1, "comput": [1, 3, 4, 7, 9], "its": [1, 2, 3, 5, 7, 9], "log": 1, "onc": [1, 3], "insid": 1, "cross": 1, "entropi": 1, "doe": [1, 9], "smart": 1, "like": [1, 3, 7, 8, 10], "logsumexp": 1, "trick": 1, "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "y": [1, 2, 3, 5, 7, 8, 9], "logitcrossentropi": 1, "gener": [1, 2, 5, 6, 9, 10], "method": [1, 2, 3, 4, 5, 6, 9], "next": [1, 10], "fashion": [1, 2, 5], "mnist": [1, 2], "imag": 1, "dimension": [1, 3, 4, 7, 9], "featur": [1, 2, 3, 4, 10], "vector": [1, 2, 3, 5, 7, 8], "mldataset": [1, 2], "env": [1, 2], "datadeps_always_accept": [1, 2], "true": [1, 2, 3, 5, 7, 8, 9, 10], "mnist_train": [1, 2], "mnist_test": [1, 2], "fashionmnist": [1, 2], "test": [1, 2, 10], "label": [1, 2, 3, 4, 6, 10], "onehotbatch": 1, "target": [1, 2, 4, 8, 10], "0": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "train_load": [1, 2, 3], "dataload": [1, 2, 3], "batchsiz": [1, 2, 3], "256": 1, "num_epoch": [1, 3], "loss_volum": 1, "map": 1, "do": [1, 4, 5], "i": [1, 2, 3, 7, 10], "descent": [1, 3], "end": [1, 2, 3, 4, 5, 6, 7], "element": [1, 2, 5, 7, 8, 9, 10], "float32": [1, 2, 3, 7, 9], "6156508": 1, "54177076": 1, "50940657": 1, "48994175": 1, "47646806": 1, "46637794": 1, "45843133": 1, "4519492": 1, "44652238": 1, "44188702": 1, "One": [2, 5, 9, 10], "wide": 2, "lecun": 2, "et": [2, 3, 5], "al": [2, 3, 5], "1998": 2, "handwritten": 2, "digit": 2, "At": [2, 7], "time": [2, 4, 7, 10], "releas": 2, "1990": 2, "pose": 2, "formid": 2, "challeng": 2, "machin": [2, 4, 5, 10], "algorithm": [2, 5], "60": 2, "000": [2, 4], "28x28": 2, "pixel": 2, "resolut": 2, "plu": 2, "To": [2, 3, 4, 5, 7, 8, 9, 10], "put": 2, "perspect": 2, "sun": 2, "sparcstat": 2, "whop": 2, "64mb": 2, "ram": 2, "blister": 2, "mflop": 2, "wa": [2, 5, 10], "consid": [2, 4, 5], "state": 2, "art": 2, "equip": 2, "AT": 2, "bell": 2, "laboratori": 2, "1995": 2, "achiev": 2, "accuraci": 2, "recognit": 2, "kei": 2, "compon": [2, 3, 5, 9], "autom": [2, 3], "letter": 2, "sort": [2, 3], "usp": 2, "network": [2, 3, 5, 7], "lenet": 2, "support": 2, "invari": 2, "sch\u00f6lkopf": 2, "1996": 2, "tangent": [2, 6], "distanc": [2, 10], "classifi": 2, "simard": 2, "allow": [2, 3, 7, 9, 10], "reach": 2, "error": [2, 3, 4, 5], "rate": 2, "below": [2, 3, 5, 7, 8, 9], "over": [2, 3, 4, 5, 9], "decad": [2, 3, 5], "serv": 2, "point": [2, 4, 7], "compar": [2, 3], "while": [2, 5, 6, 7, 8, 10], "had": 2, "run": [2, 4, 7, 10], "benchmark": [2, 4], "even": [2, 5, 7, 10], "simpl": 2, "model": [2, 4, 5, 8, 9, 10], "todai": 2, "s": [2, 3, 5, 6, 7, 8, 9, 10], "standard": [2, 3, 4, 7], "95": 2, "unsuit": 2, "distinguish": 2, "between": [2, 7], "stronger": 2, "weaker": 2, "ones": [2, 4, 7, 9, 10], "more": [2, 3, 4, 5, 7, 10], "so": [2, 3, 4, 5, 7], "veri": [2, 5], "typic": [2, 4, 9], "seen": 2, "problem": [2, 4, 5], "skew": 2, "develop": [2, 4, 5, 6, 10], "toward": [2, 10], "famili": 2, "advantag": [2, 3], "clean": 2, "set": [2, 4, 7, 8, 10], "boundari": 2, "seek": 2, "saniti": 2, "check": [2, 3], "imagenet": 2, "deng": 2, "2009": 2, "relev": 2, "unfortun": 2, "larg": 2, "exampl": [2, 3, 4, 5, 6, 7, 9], "illustr": [2, 4, 5], "would": [2, 10], "long": [2, 5], "train": [2, 4, 5, 8], "interact": 2, "substitut": 2, "focu": [2, 3, 5], "discuss": [2, 7], "come": 2, "qualit": 2, "similar": 2, "smaller": 2, "xiao": 2, "2017": 2, "contain": [2, 4, 5, 7, 8], "categori": [2, 4, 8], "cloth": 2, "sinc": [2, 3, 5, 8, 9], "frequent": 2, "major": [2, 7, 10], "provid": [2, 3, 7, 10], "preprocess": 2, "download": 2, "memori": 2, "metadata": 2, "dict": 2, "string": [2, 8], "ani": [2, 7, 9, 10], "4": [2, 3, 4, 5, 7, 8, 9], "split": [2, 7], "10000": [2, 4, 6, 10], "arrai": [2, 7, 10], "int64": [2, 7, 8, 9], "from": [2, 3, 5, 7, 9, 10], "each": [2, 3, 4, 5, 7, 8, 9, 10], "repres": [2, 3, 5, 8, 9], "6": [2, 3, 4, 5, 7, 9], "A": [2, 7, 8, 9], "must": [2, 9], "consequ": 2, "respect": [2, 5, 8], "length": [2, 3, 4, 5, 6, 7, 9], "60000": 2, "binari": [2, 7], "black": [2, 10], "white": 2, "note": [2, 3, 5, 7, 9, 10], "though": [2, 10], "modern": [2, 3, 5], "ha": [2, 3, 5, 9], "channel": 2, "red": 2, "green": 2, "blue": 2, "hyperspectr": 2, "excess": 2, "100": [2, 3, 6, 10], "hymap": 2, "sensor": 2, "126": 2, "By": [2, 3, 9, 10], "store": [2, 7, 8], "h": [2, 6], "w": [2, 3], "height": 2, "width": 2, "human": 2, "follow": [2, 3, 5, 7, 9], "code": [2, 3, 4, 5, 7, 9], "convert": [2, 8], "numer": [2, 4, 6, 8], "class_nam": 2, "shirt": 2, "trouser": 2, "pullov": 2, "dress": 2, "coat": 2, "sandal": 2, "sneaker": 2, "bag": 2, "ankl": 2, "boot": 2, "get_fashion_mnist_label": 2, "int": [2, 3, 7], "how": [2, 3, 5, 8, 10], "work": [2, 3, 5, 7], "let": [2, 3, 5, 6, 8, 10], "invok": [2, 7, 9], "18": [2, 7, 9], "64": [2, 7], "shuffl": [2, 3], "938": 2, "tupl": [2, 7, 9], "first": [2, 3, 4, 5, 7, 8, 9, 10], "loader": 2, "blazingli": 2, "fast": [2, 4], "nonetheless": 2, "suffici": 2, "quit": 2, "bit": 2, "longer": 2, "henc": 2, "enough": 2, "io": 2, "constrain": 2, "090352": 2, "second": [2, 4, 7, 9, 10], "23": [2, 7, 9], "06": 2, "k": [2, 4], "alloc": [2, 3, 4, 7], "182": 2, "540": 2, "mib": [2, 4], "17": [2, 7, 9], "56": 2, "gc": 2, "15": [2, 7, 9], "25": [2, 7, 9], "compil": [2, 4], "show_imag": 2, "associ": 2, "cairomaki": [2, 4, 6, 10], "imageshow": 2, "real": [2, 3], "column_num": 2, "batch_num": 2, "row_num": 2, "ceil": 2, "fig": [2, 3], "figur": [2, 4], "slice": 2, "zip": [2, 4], "eachslic": 2, "dim": [2, 7, 9], "cartesianindic": 2, "2": [2, 3, 4, 5, 6, 7, 8, 9, 10], "rotr90": 2, "convert2imag": 2, "axi": [2, 4, 7, 9], "aspect": 2, "dataaspect": 2, "titl": 2, "xticksvis": 2, "fals": [2, 7, 8], "xticklabelsvis": 2, "yticksvis": 2, "yticklabelsvis": 2, "In": [2, 3, 4, 5, 7, 8, 9, 10], "idea": [2, 5], "inspect": [2, 3, 7], "re": 2, "spot": 2, "unusu": 2, "addit": [2, 9], "safeguard": 2, "against": [2, 3], "mistak": 2, "design": [2, 8, 9], "experi": [2, 3, 6, 10], "correspond": [2, 4, 7, 8, 9, 10], "text": [2, 5], "wit": 3, "cambrian": 3, "explos": 3, "past": [3, 5], "sheer": 3, "number": [3, 5, 7, 8, 9, 10], "techniqu": [3, 5], "applic": 3, "far": [3, 5], "surpass": 3, "progress": 3, "previou": [3, 10], "due": 3, "fortuit": 3, "combin": 3, "multipl": [3, 7, 10], "factor": 3, "one": [3, 4, 7, 8, 9, 10], "power": 3, "free": 3, "offer": [3, 5, 9], "open": [3, 8], "sourc": 3, "theano": 3, "bergstra": 3, "2010": 3, "distbelief": 3, "dean": 3, "2012": 3, "caff": 3, "jia": 3, "2014": 3, "arguabl": 3, "found": 3, "widespread": 3, "adopt": 3, "contrast": [3, 10], "earlier": 3, "semin": 3, "sn2": 3, "simulateur": 3, "neuristiqu": 3, "bottou": 3, "le": 3, "cun": 3, "1988": 3, "lisp": 3, "automat": [3, 7], "differenti": 3, "julia": [3, 4, 7, 9], "These": [3, 8], "modular": 3, "repetit": 3, "gradient": 3, "base": [3, 4, 7, 8], "becaus": [3, 7, 10], "iter": [3, 5], "neural": [3, 7], "common": [3, 4, 5, 8], "well": [3, 5], "show": [3, 5, 7], "api": 3, "succinct": 3, "snippet": [3, 5, 7, 9], "drawn": [3, 7], "normal": [3, 7], "distribut": [3, 7, 10], "synthetic_data": 3, "b": [3, 4, 5, 7, 9], "num_exampl": 3, "rand": [3, 10], "0f0": [3, 7, 9], "1f0": 3, "01f0": 3, "return": [3, 5, 7, 10], "later": [3, 4], "estim": [3, 4, 8, 10], "ground": 3, "truth": 3, "valu": [3, 4, 5, 7, 8, 9, 10], "true_w": 3, "true_b": 3, "4412894": 3, "1683054": 3, "3911616": 3, "98486364": 3, "9546863": 3, "6044618": 3, "8892765": 3, "543286": 3, "5628222349681895": 3, "486395385302604": 3, "9511675149202348": 3, "3048679489642385": 3, "println": 3, "some": [3, 5, 6, 8, 9, 10], "intuit": [3, 6, 10], "minibatch": [3, 4], "match": 3, "given": [3, 7, 8, 10], "batch_siz": 3, "oper": [3, 4, 5, 9], "predefin": 3, "worri": 3, "recal": [3, 5, 9], "architectur": 3, "singl": [3, 4, 7], "describ": [3, 10], "call": [3, 4, 5, 7, 8, 9, 10], "denot": 3, "neuron": 3, "two": [3, 4, 7, 8, 9, 10], "mse": 3, "squar": 3, "default": [3, 5, 9], "averag": [3, 9], "own": 3, "classic": [3, 4], "optimis": 3, "opt": 3, "might": [3, 5, 8, 10], "notic": [3, 7, 8], "express": [3, 9], "through": [3, 5], "requir": [3, 4, 5, 10], "fewer": 3, "line": [3, 4, 6, 8, 10], "did": [3, 10], "individu": [3, 5, 9, 10], "start": [3, 4, 5, 9, 10], "complex": [3, 5], "grow": [3, 5, 9, 10], "consider": 3, "printf": [3, 6], "epoch": 3, "f": [3, 4, 5, 6], "n": [3, 4, 6, 9, 10], "381278": 3, "007915": 3, "000265": 3, "finit": [3, 10], "actual": 3, "access": [3, 7, 9], "weight": 3, "bia": 3, "counterpart": 3, "vec": 3, "0016717910766601562": 3, "0073896884918212": 3, "00999946594238299": 3, "pop": 4, "up": [4, 5, 9, 10], "whenev": [4, 8, 10], "predict": [4, 8, 10], "includ": [4, 7], "price": [4, 8], "home": [4, 8], "stock": 4, "etc": 4, "stai": 4, "patient": [4, 10], "hospit": 4, "forecast": 4, "demand": 4, "retail": 4, "sale": 4, "among": [4, 5], "countless": 4, "Not": [4, 8], "everi": [4, 7], "introduc": 4, "classif": 4, "where": [4, 5, 7, 8, 9, 10], "goal": 4, "membership": 4, "suppos": [4, 5], "wish": [4, 5, 7, 9, 10], "hous": 4, "dollar": 4, "area": 4, "feet": 4, "ag": 4, "year": [4, 10], "get": [4, 8, 10], "hand": [4, 5], "terminolog": 4, "dataset": [4, 9, 10], "row": [4, 7, 8, 9], "instanc": [4, 5, 7, 9], "sampl": [4, 7, 10], "try": 4, "upon": [4, 8], "covari": 4, "when": [4, 5, 7, 9, 10], "whole": [4, 7], "simultan": 4, "effici": 4, "calcul": [4, 5, 9], "leverag": 4, "algebra": 4, "costli": 4, "loop": [4, 5], "why": 4, "matter": [4, 9], "ad": [4, 9], "reli": 4, "now": [4, 5, 8, 9], "workload": 4, "them": [4, 5, 7], "coordin": 4, "c": [4, 5], "ae": 4, "052413": 4, "151": 4, "62": 4, "379": 4, "88": 4, "12": [4, 5, 7, 9], "altern": 4, "reload": 4, "elementwis": [4, 7, 9], "sum": [4, 5, 7, 10], "d": 4, "000037": 4, "78": [4, 7], "234": 4, "kib": 4, "dramat": 4, "often": [4, 5, 7, 9, 10], "yield": [4, 5], "order": [4, 5, 7], "magnitud": 4, "speedup": 4, "moreov": [4, 10], "push": 4, "mathemat": [4, 6, 9, 10], "without": [4, 7], "ourselv": [4, 10], "reduc": [4, 7, 9], "potenti": 4, "increas": 4, "portabl": 4, "visual": 4, "7": [4, 7, 9], "01": 4, "deviat": [4, 7, 10], "pair": 4, "param": 4, "ax": [4, 6, 9, 10], "xlabel": [4, 6, 10], "ylabel": [4, 6, 10], "p": [4, 10], "xtick": [4, 10], "\u03bc": 4, "\u03c3": 4, "std": 4, "axislegend": [4, 6, 10], "posit": [4, 6, 7], "lt": [4, 6], "deriv": 5, "crucial": 5, "step": [5, 7, 8], "optim": 5, "straightforward": 5, "out": [5, 7, 8, 10], "tediou": 5, "prone": 5, "onli": [5, 7, 9, 10], "becom": [5, 9], "fortun": 5, "off": [5, 10], "plate": 5, "shorten": 5, "autograd": 5, "success": [5, 10], "graph": 5, "track": 5, "appli": [5, 7, 10], "rule": [5, 10], "backpropag": 5, "hot": [5, 8], "concern": [5, 10], "histori": 5, "fact": [5, 9, 10], "earliest": 5, "date": 5, "back": [5, 10], "half": 5, "centuri": 5, "wengert": 5, "1964": 5, "core": 5, "behind": 5, "phd": 5, "thesi": 5, "1980": 5, "speelpen": 5, "were": [5, 10], "further": 5, "late": 5, "griewank": 5, "1989": 5, "option": 5, "emploi": [5, 10], "forward": 5, "propag": 5, "revel": 5, "2016": 5, "befor": [5, 7], "explor": 5, "master": 5, "zygot": 5, "assign": [5, 7, 9, 10], "initi": [5, 7], "collect": [5, 7, 9, 10], "float64": [5, 7, 8, 9], "defin": [5, 7], "linearalgebra": [5, 9], "2x": [5, 6], "grad": 5, "8": [5, 7, 9], "16": [5, 7, 9], "verifi": 5, "expect": [5, 10], "ident": [5, 7, 10], "4x": [5, 6], "natur": 5, "interpret": [5, 10], "jacobian": 5, "partial": 5, "higher": [5, 7], "could": [5, 7], "tensor": 5, "advanc": 5, "commonli": 5, "full": 5, "separ": [5, 8], "batch": 5, "sometim": [5, 7, 9, 10], "move": 5, "outsid": 5, "record": [5, 8, 9], "sai": [5, 9], "auxiliari": 5, "intermedi": 5, "term": [5, 9], "final": [5, 7], "toi": 5, "clearer": 5, "z": 5, "direct": 5, "influenc": 5, "convei": 5, "via": [5, 7, 8, 9], "u": [5, 9], "whose": [5, 7, 8], "proven": 5, "been": [5, 10], "wipe": 5, "thu": [5, 7], "ancestor": 5, "procedur": [5, 7], "lead": 5, "persist": [5, 8], "review": 5, "path": 5, "lot": 5, "freedom": 5, "condit": [5, 7], "benefit": 5, "maze": 5, "e": [5, 7, 8, 10], "g": [5, 7, 8, 10], "arbitrari": [5, 9], "still": [5, 7], "statement": [5, 7], "2a": 5, "norm": 5, "1000": 5, "2b": 5, "100b": 5, "random": [5, 10], "what": [5, 7, 10], "form": [5, 7], "randn": [5, 7], "dynam": 5, "vital": 5, "statist": [5, 8, 9], "imposs": 5, "priori": 5, "3x": 6, "lack": 6, "rigor": 6, "proof": 6, "soon": 6, "inde": 6, "5f": 6, "limit": 6, "30000": 6, "01000": 6, "03000": 6, "00100": 6, "00300": 6, "00010": 6, "00030": 6, "00001": 6, "00003": 6, "slope": 6, "maki": 6, "rang": [6, 7], "fg": [6, 10], "linestyl": [6, 10], "dash": [6, 10], "unitrang": [7, 9], "syntax": 7, "also": [7, 8, 9], "argument": [7, 10], "differ": [7, 10], "11": [7, 9], "equival": [7, 9], "signific": 7, "shorthand": 7, "along": [7, 9], "specifi": [7, 9], "deal": 7, "total": [7, 9], "alter": 7, "transform": 7, "retain": 7, "laid": 7, "column": [7, 8, 9], "permut": 7, "permutedim": 7, "transpos": [7, 9], "4x3": 7, "eltyp": [7, 9], "alia": 7, "either": [7, 8], "list": 7, "product": 7, "equal": 7, "multi": [7, 9], "x2": 7, "view": 7, "copi": [7, 9], "zero": 7, "randomli": 7, "independ": 7, "gaussian": 7, "0725183": 7, "383395": 7, "87141": 7, "51073": 7, "33734": 7, "74673": 7, "600773": 7, "4579": 7, "300499": 7, "348163": 7, "58002": 7, "50599": 7, "suppli": 7, "exact": 7, "begin": [7, 10], "unfold": 7, "select": [7, 8], "And": [7, 10], "third": 7, "realiti": 7, "36": [7, 9], "13": [7, 9], "27": 7, "29": 7, "matric": 7, "21": [7, 9], "33": 7, "22": [7, 9], "34": 7, "35": 7, "24": [7, 9], "30": 7, "dot": 7, "unari": 7, "exp": 7, "7182817": 7, "20": [7, 9], "085537": 7, "54": 7, "59815": 7, "148": 7, "41316": 7, "403": 7, "4288": 7, "1096": 7, "6332": 7, "2980": 7, "958": 7, "8103": 7, "084": 7, "22026": 7, "467": 7, "59874": 7, "14": [7, 8, 9], "162754": 7, "concaten": 7, "togeth": 7, "stack": 7, "larger": 7, "tell": [7, 10], "system": 7, "happen": [7, 8, 10], "vcat": 7, "hcat": 7, "block": 7, "diagon": 7, "cat": 7, "logic": 7, "j": 7, "otherwis": 7, "bitmatrix": 7, "under": [7, 10], "certain": 7, "mechan": [7, 9], "accord": 7, "expand": 7, "ii": [7, 10], "caus": 7, "host": 7, "derefer": 7, "newli": 7, "demonstr": [7, 8], "issu": 7, "objectid": 7, "mutabl": 7, "composit": 7, "type": [7, 8, 9, 10], "object": [7, 10], "locat": [7, 8], "That": [7, 10], "howev": 7, "place": 7, "updat": [7, 10], "pars": 7, "fuse": 7, "csv": 8, "datafram": 8, "featuretransform": 8, "comma": 8, "ubiquit": 8, "tabular": 8, "spreadsheet": 8, "sever": 8, "field": [8, 10], "albert": 8, "einstein": 8, "march": 8, "1879": 8, "ulm": 8, "feder": 8, "polytechn": 8, "school": 8, "accomplish": 8, "gravit": 8, "physic": 8, "load": [8, 9], "house_tini": 8, "distinct": [8, 9], "room": 8, "numroom": 8, "roof": 8, "rooftyp": 8, "csv_data": 8, "127500": 8, "106000": 8, "slate": 8, "178100": 8, "140000": 8, "dir_path": 8, "joinpath": 8, "file_path": 8, "mkpath": 8, "iobuff": 8, "import": 8, "dataframerownumroomsrooftypepriceint64": 8, "string7": 8, "int641missingmissing12750022missing10600034slate1781004missingmissing140000": 8, "supervis": [8, 10], "versu": 8, "integ": 8, "index": [8, 9], "replac": 8, "special": 8, "miss": 8, "empti": 8, "270000": 8, "bed": 8, "bug": 8, "scienc": 8, "menac": 8, "confront": 8, "throughout": 8, "career": [8, 10], "context": 8, "handl": 8, "imput": 8, "delet": 8, "simpli": [8, 9], "discard": 8, "those": 8, "heurist": 8, "categor": 8, "treat": 8, "rooftype_sl": 8, "rooftype_miss": 8, "hold": 8, "uniqu": [8, 10], "roof_typ": 8, "encod": 8, "append": 8, "apply_append": 8, "onehotencod": 8, "col": 8, "header": 8, "rooftype_": 8, "drop": [8, 9], "dataframerownumroomsrooftype_missingrooftype_slateint64": 8, "boolbool1missingtruefalse22truefalse34falsetrue4missingtruefals": 8, "skipmiss": 8, "dataframerownumroomsrooftype_missingrooftype_slatefloat64boolbool13": 8, "0truefalse22": 8, "0truefalse34": 8, "0falsetrue43": 8, "0truefals": 8, "displai": [8, 9], "manipul": 9, "sophist": 9, "gentl": 9, "introduct": 9, "essenti": 9, "concept": 9, "ramp": 9, "implement": [9, 10], "familiar": 9, "divis": 9, "exponenti": 9, "purpos": 9, "think": [9, 10], "fix": 9, "indic": 9, "appropri": 9, "m": 9, "desir": 9, "adjoint": 9, "symmetr": 9, "attribut": 9, "analog": 9, "19": 9, "produc": 9, "operand": 9, "hadamard": 9, "multipli": 9, "26": 9, "should": [9, 10], "dropdim": 9, "singleton": 9, "although": 9, "relat": 9, "quantiti": 9, "divid": [9, 10], "part": 9, "5f0": 9, "1x3": 9, "unchang": 9, "broadcast": 9, "behavior": 9, "sum_a": 9, "111111": 9, "333333": 9, "555556": 9, "166667": 9, "cumul": 9, "cumsum": [9, 10], "fundament": 9, "tab": 9, "complet": 9, "cdot": 9, "repl": 9, "obtain": 9, "simplifi": 9, "confus": 9, "ell_2": 9, "ell_1": 9, "frobeniu": 9, "uncertainti": 10, "someth": 10, "unknown": 10, "known": 10, "attempt": 10, "Or": 10, "smallest": 10, "quantifi": 10, "suffer": 10, "heart": 10, "attack": 10, "unsupervis": 10, "care": 10, "determin": 10, "whether": 10, "measur": 10, "anomal": 10, "observ": 10, "popul": 10, "interest": 10, "reinforc": 10, "agent": 10, "act": 10, "intellig": 10, "variou": 10, "environ": 10, "reason": 10, "reward": 10, "encount": 10, "respons": 10, "avail": 10, "action": 10, "probabilist": 10, "likelihood": 10, "event": 10, "frequenc": 10, "repeat": 10, "fairli": 10, "uncontroversi": 10, "frequentist": 10, "scholar": 10, "adher": 10, "bayesian": 10, "broadli": 10, "formal": 10, "character": 10, "degre": 10, "belief": 10, "non": 10, "moon": 10, "chees": 10, "subject": 10, "unambigu": 10, "light": 10, "evid": 10, "prior": 10, "backward": 10, "infer": 10, "draw": 10, "analyz": 10, "hunt": 10, "pattern": 10, "hope": 10, "broader": 10, "cours": 10, "theses": 10, "depart": 10, "compani": 10, "institut": 10, "devot": 10, "studi": 10, "scratch": 10, "surfac": 10, "foundat": 10, "float": 10, "greater": 10, "num_toss": 10, "head": 10, "_": 10, "tail": 10, "print": 10, "59": 10, "41": 10, "simul": 10, "outcom": 10, "roll": 10, "die": 10, "binomi": 10, "trial": 10, "omit": 10, "ten": 10, "fair": 10, "occurr": 10, "receiv": 10, "give": 10, "intend": 10, "count": 10, "drew": 10, "saw": 10, "slightli": 10, "unfair": 10, "artifact": 10, "small": 10, "4979": 10, "5021": 10, "evolv": 10, "cum_count": 10, "hline": 10, "color": 10, "ytick": 10, "2000": 10, "solid": 10, "curv": 10, "turn": 10, "group": 10, "underli": 10, "conduct": 10, "converg": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dive": 0, "deep": 0, "learn": 0, "julia": [0, 5], "code": 0, "implement": [0, 1, 3], "standatd": 0, "tip": 0, "local": 0, "instal": 0, "pre": 0, "requisit": 0, "contribut": 0, "concis": [1, 3], "softmax": 1, "regress": [1, 3, 4], "defin": [1, 3], "model": [1, 3], "train": [1, 3], "The": [2, 4], "imag": 2, "classif": 2, "dataset": [2, 3, 8], "load": 2, "read": [2, 3, 8], "minibatch": 2, "visual": [2, 6], "linear": [3, 4, 9], "gener": 3, "loss": [3, 4], "function": [3, 5], "optim": 3, "algorithm": 3, "vector": [4, 9], "speed": 4, "normal": 4, "distribut": 4, "squar": 4, "automat": 5, "differenti": [5, 6], "A": [5, 10], "simpl": [5, 10], "backward": 5, "non": [5, 9], "scalar": [5, 9], "variabl": 5, "detach": 5, "comput": 5, "gradient": 5, "control": 5, "flow": 5, "calculu": 6, "deriv": 6, "util": 6, "data": [7, 8], "manipul": 7, "get": 7, "start": 7, "index": 7, "slice": 7, "oper": 7, "broadcast": 7, "save": 7, "memori": 7, "preprocess": 8, "prepar": 8, "convers": 8, "matrix": [8, 9], "algebra": 9, "matric": 9, "arrai": 9, "basic": 9, "properti": 9, "arithmet": 9, "reduct": 9, "sum": 9, "dot": 9, "product": 9, "multipl": 9, "norm": 9, "probabl": 10, "statist": 10, "exampl": 10, "toss": 10, "coin": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})