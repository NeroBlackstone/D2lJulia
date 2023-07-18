Search.setIndex({"docnames": ["README", "notebooks/chapter_linear_classification/Concise Implementation of Softmax Regression", "notebooks/chapter_linear_classification/The Image Classification Dataset", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression", "notebooks/chapter_linear_regression/Linear Regression", "notebooks/chapter_multilayer_perceptrons/Dropout", "notebooks/chapter_multilayer_perceptrons/Implementation of Multilayer Perceptrons", "notebooks/chapter_multilayer_perceptrons/Multilayer Perceptrons", "notebooks/chapter_multilayer_perceptrons/Numerical Stability and Initialization", "notebooks/chapter_multilayer_perceptrons/Predicting House Prices on Kaggle", "notebooks/chapter_preliminaries/Automatic Differentiation", "notebooks/chapter_preliminaries/Calculus", "notebooks/chapter_preliminaries/Data Manipulation", "notebooks/chapter_preliminaries/Data Preprocessing", "notebooks/chapter_preliminaries/Linear Algebra", "notebooks/chapter_preliminaries/Probability and Statistics"], "filenames": ["README.md", "notebooks/chapter_linear_classification/Concise Implementation of Softmax Regression.ipynb", "notebooks/chapter_linear_classification/The Image Classification Dataset.ipynb", "notebooks/chapter_linear_regression/Concise Implementation of Linear Regression.ipynb", "notebooks/chapter_linear_regression/Linear Regression.ipynb", "notebooks/chapter_multilayer_perceptrons/Dropout.ipynb", "notebooks/chapter_multilayer_perceptrons/Implementation of Multilayer Perceptrons.ipynb", "notebooks/chapter_multilayer_perceptrons/Multilayer Perceptrons.ipynb", "notebooks/chapter_multilayer_perceptrons/Numerical Stability and Initialization.ipynb", "notebooks/chapter_multilayer_perceptrons/Predicting House Prices on Kaggle.ipynb", "notebooks/chapter_preliminaries/Automatic Differentiation.ipynb", "notebooks/chapter_preliminaries/Calculus.ipynb", "notebooks/chapter_preliminaries/Data Manipulation.ipynb", "notebooks/chapter_preliminaries/Data Preprocessing.ipynb", "notebooks/chapter_preliminaries/Linear Algebra.ipynb", "notebooks/chapter_preliminaries/Probability and Statistics.ipynb"], "titles": ["Dive into Deep Learning - Julia", "<span class=\"section-number\">10. </span>Concise Implementation of Softmax Regression", "<span class=\"section-number\">9. </span>The Image Classification Dataset", "<span class=\"section-number\">8. </span>Concise Implementation of Linear Regression", "<span class=\"section-number\">7. </span>Linear Regression", "<span class=\"section-number\">14. </span>Dropout", "<span class=\"section-number\">12. </span>Implementation of Multilayer Perceptrons", "<span class=\"section-number\">11. </span>Multilayer Perceptrons", "<span class=\"section-number\">13. </span>Numerical Stability and Initialization", "<span class=\"section-number\">15. </span>Predicting House Prices on Kaggle", "<span class=\"section-number\">5. </span>Automatic Differentiation", "<span class=\"section-number\">4. </span>Calculus", "<span class=\"section-number\">1. </span>Data Manipulation", "<span class=\"section-number\">2. </span>Data Preprocessing", "<span class=\"section-number\">3. </span>Linear Algebra", "<span class=\"section-number\">6. </span>Probability and Statistics"], "terms": {"program": [0, 3, 10, 12], "languag": [0, 10, 12, 15], "flux": [0, 1, 3, 5, 6, 7, 8], "jl": [0, 2, 13, 15], "thi": [0, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15], "tutori": 0, "mainli": 0, "focus": 0, "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "pure": 0, "rather": [0, 3, 4, 10], "than": [0, 2, 3, 4, 6, 9, 10, 12, 15], "explain": 0, "specif": [0, 2, 14, 15], "principl": 0, "If": [0, 12, 14, 15], "you": [0, 2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15], "know": [0, 10, 15], "littl": 0, "about": [0, 3, 7, 12, 15], "pleas": 0, "refer": [0, 2, 10], "same": [0, 6, 10, 12, 14], "chapter": 0, "origin": [0, 2, 7, 12, 13, 14], "book": [0, 2, 7], "julian": 0, "avoid": 0, "low": [0, 3, 7], "qualiti": 0, "port": 0, "write": [0, 4, 12, 13], "wai": [0, 7, 8, 15], "consist": [0, 2, 4, 13], "variabl": [0, 4, 15], "function": [0, 1, 2, 8, 11, 12, 14, 15], "name": [0, 2, 13], "possibl": [0, 15], "facilit": 0, "understand": [0, 2], "best": 0, "practic": [0, 3, 9], "make": [0, 2, 10], "all": [0, 2, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "thing": [0, 2, 4], "easi": 0, "right": 0, "don": 0, "t": [0, 2], "need": [0, 3, 4, 5, 10, 12, 14, 15], "too": [0, 2], "much": [0, 2, 3, 4, 6], "knowledg": [0, 9], "read": 0, "better": [0, 8], "have": [0, 2, 3, 7, 8, 9, 10, 12, 13, 14, 15], "other": [0, 4, 10, 12], "preliminari": 0, "cover": [0, 9], "most": [0, 2, 7, 10, 12, 14, 15], "after": [0, 5, 8, 12, 14, 15], "can": [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15], "roughli": 0, "brows": 0, "mlutil": [0, 1, 2, 3, 5, 6], "document": 0, "which": [0, 2, 3, 4, 7, 8, 10, 12, 14], "great": [0, 9], "help": [0, 15], "your": [0, 8, 9, 13], "subsequ": [0, 5], "data": [0, 1, 2, 3, 4, 5, 6, 7, 10, 15], "process": [0, 2, 4, 10, 13, 15], "likewis": [0, 3, 10, 14], "mlbase": [0, 1, 5, 6], "anoth": [0, 10, 15], "ml": 0, "tool": [0, 3, 9, 14], "librari": [0, 3, 4, 10], "good": [0, 2], "choic": [0, 8, 10], "perform": [0, 2, 7, 12, 14], "evalu": [0, 2, 10, 12], "juliaml": 0, "fluxml": 0, "organ": [0, 15], "mani": [0, 2, 4, 8, 12], "take": [0, 2, 7, 8, 10, 12, 13], "look": [0, 2, 3, 8], "mai": [0, 7, 8, 12, 15], "packag": [0, 10, 11, 14], "ar": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15], "jupyterlab": 0, "desktop": 0, "vscode": 0, "jupyt": 0, "plugin": 0, "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "9": [0, 1, 2, 5, 6, 12, 14], "v": 0, "version": [0, 2], "clone": 0, "project": 0, "chang": [0, 12, 15], "directori": 0, "d2ljulia": 0, "depend": [0, 10, 13, 15], "pkg": 0, "activ": [0, 2, 8], "instanti": [0, 4], "ll": [0, 2], "few": [0, 2, 14], "minut": 0, "welcom": 0, "just": [0, 1, 10, 12, 14, 15], "add": [0, 4, 5, 6, 7], "ipynb": 0, "file": [0, 13], "notebook": 0, "folder": 0, "creat": [0, 10, 12, 13, 14], "an": [0, 2, 4, 7, 10, 11, 12, 13, 14, 15], "entri": [0, 2, 3, 12, 13], "_toc": 0, "yml": 0, "The": [0, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15], "websit": 0, "built": [0, 1, 2, 14], "For": [0, 2, 3, 10, 12, 13, 14, 15], "faster": [0, 3, 4], "ci": 0, "build": [0, 3, 9, 10, 14, 15], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "close": [0, 3, 7, 8], "execut": 0, "It": [0, 2, 3, 7, 9], "mean": [0, 3, 4, 12, 13, 14], "cell": 0, "save": 0, "result": [0, 1, 5, 6, 10, 12, 14], "high": [1, 2, 3, 5, 6, 7], "level": [1, 2, 3, 5, 6, 7], "deep": [1, 2, 3, 7, 8, 9, 10], "learn": [1, 2, 3, 4, 7, 8, 10, 13, 15], "framework": [1, 2, 3, 10], "made": [1, 8, 15], "easier": [1, 3], "linear": [1, 6, 7], "see": [1, 2, 7, 8, 11, 15], "section": [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15], "3": [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14], "5": [1, 2, 5, 6, 7, 11, 12, 14, 15], "thei": [1, 7, 8, 10, 13, 15], "similarli": [1, 8, 12], "conveni": [1, 2, 3], "here": [1, 2, 7, 8, 10, 12, 13, 14, 15], "As": [1, 2, 4, 6, 7, 8, 10, 15], "construct": [1, 3, 12, 14], "our": [1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 14, 15], "fulli": [1, 3, 5, 6, 8], "connect": [1, 3, 5, 6], "layer": [1, 3, 5, 6, 8], "flatten": [1, 5, 6], "reshap": [1, 3, 12, 14], "arbitrarli": 1, "shape": [1, 3, 7, 10, 12, 14], "input": [1, 3, 5, 7, 8, 10, 13, 14], "matrix": [1, 3, 8, 10, 12], "output": [1, 3, 5, 6, 7, 10, 14], "preserv": 1, "size": [1, 2, 3, 12, 14, 15], "last": [1, 12], "dimens": [1, 12, 14], "chain": [1, 5, 6, 10], "dens": [1, 3, 5, 6], "28": [1, 2, 5, 6, 12, 14], "10": [1, 2, 3, 4, 5, 6, 7, 11, 12, 14], "784": [1, 5, 6], "90m": [1, 3, 5, 6], "7_850": 1, "paramet": [1, 3, 5, 6, 7, 8, 12, 14], "39m": [1, 3, 5, 6], "loss": [1, 5, 6, 7, 10], "x": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "y": [1, 2, 3, 5, 6, 10, 12, 13, 14], "logitcrossentropi": [1, 5, 6], "gener": [1, 2, 9, 10, 11, 14, 15], "method": [1, 2, 3, 4, 10, 11, 14], "next": [1, 5, 15], "fashion": [1, 2, 10], "mnist": [1, 2], "imag": [1, 7], "dimension": [1, 3, 4, 12, 14], "featur": [1, 2, 3, 4, 5, 6, 9, 15], "vector": [1, 2, 3, 6, 10, 12, 13], "mldataset": [1, 2, 5, 6], "prepar": [1, 5, 6], "env": [1, 2, 5, 6], "datadeps_always_accept": [1, 2, 5, 6], "true": [1, 2, 3, 5, 6, 10, 12, 13, 14, 15], "mnist_train": [1, 2, 5, 6], "mnist_test": [1, 2, 5, 6], "fashionmnist": [1, 2, 5, 6], "test": [1, 2, 5, 6, 15], "label": [1, 2, 3, 4, 5, 6, 8, 11, 15], "onehotbatch": [1, 5, 6], "target": [1, 2, 4, 5, 6, 13, 15], "0": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "train_load": [1, 2, 3, 5, 6], "dataload": [1, 2, 3, 5, 6], "batchsiz": [1, 2, 3, 5, 6], "256": [1, 5, 6], "mnist_accuraci": [1, 5, 6], "correctr": [1, 5, 6], "classifi": [1, 2, 5, 6, 7], "num_epoch": [1, 3, 5, 6], "map": [1, 5, 6, 8], "do": [1, 4, 5, 6, 7, 9, 10], "i": [1, 2, 3, 5, 6, 8, 12, 15], "descent": [1, 3, 5, 6], "end": [1, 2, 3, 4, 5, 6, 10, 11, 12], "train_loss": [1, 5, 6], "train_acc": [1, 5, 6], "test_acc": [1, 5, 6], "getindex": [1, 5, 6], "element": [1, 2, 6, 7, 10, 12, 13, 14, 15], "float32": [1, 2, 3, 6, 12, 14], "6151819": 1, "5413316": 1, "5090037": 1, "4895458": 1, "47606862": 1, "4659756": 1, "45803085": 1, "45155552": 1, "44613948": 1, "44151744": 1, "79765": 1, "8203666666666667": 1, "8302166666666667": 1, "836": 1, "8398": 1, "8427333333333333": 1, "84545": 1, "84745": 1, "8488333333333333": 1, "85015": 1, "7829": 1, "8083": 1, "8187": 1, "8246": 1, "8269": 1, "8282": 1, "8309": 1, "8326": 1, "8345": 1, "8342": 1, "cairomaki": [1, 2, 4, 5, 6, 7, 8, 11, 15], "f": [1, 3, 4, 5, 6, 8, 10, 11], "ax": [1, 4, 5, 6, 8, 11, 14, 15], "line": [1, 3, 4, 5, 6, 7, 8, 11, 13, 15], "axi": [1, 2, 4, 5, 6, 7, 11, 12, 14, 15], "xlabel": [1, 4, 5, 6, 7, 11, 15], "epoch": [1, 3, 5, 6], "linestyl": [1, 5, 6, 8, 11, 15], "dash": [1, 5, 6, 8, 11, 15], "dashdot": [1, 5, 6], "axislegend": [1, 4, 5, 6, 8, 11, 15], "posit": [1, 4, 5, 6, 7, 8, 11, 12], "rc": [1, 5, 6], "One": [2, 10, 14, 15], "wide": 2, "lecun": 2, "et": [2, 3, 10], "al": [2, 3, 10], "1998": 2, "handwritten": 2, "digit": 2, "At": [2, 12], "time": [2, 4, 12, 15], "its": [2, 3, 5, 8, 10, 12, 14], "releas": 2, "1990": 2, "pose": [2, 8], "formid": 2, "challeng": 2, "machin": [2, 4, 10, 15], "algorithm": [2, 7, 8, 10], "60": 2, "000": [2, 4], "28x28": 2, "pixel": 2, "resolut": [2, 7], "plu": 2, "To": [2, 3, 4, 7, 8, 10, 12, 13, 14, 15], "put": [2, 9], "perspect": 2, "sun": 2, "sparcstat": 2, "whop": 2, "64mb": 2, "ram": 2, "blister": 2, "mflop": 2, "wa": [2, 10, 15], "consid": [2, 4, 10], "state": 2, "art": 2, "equip": 2, "AT": 2, "bell": 2, "laboratori": 2, "1995": 2, "achiev": 2, "accuraci": 2, "recognit": 2, "kei": [2, 6], "compon": [2, 3, 10, 14], "autom": [2, 3], "letter": 2, "sort": [2, 3], "usp": 2, "network": [2, 3, 7, 8, 9, 10, 12], "lenet": 2, "support": 2, "invari": 2, "sch\u00f6lkopf": 2, "1996": 2, "tangent": [2, 11], "distanc": [2, 15], "simard": 2, "allow": [2, 3, 7, 12, 14, 15], "reach": [2, 7], "error": [2, 3, 4, 10], "rate": 2, "below": [2, 3, 7, 10, 12, 13, 14], "over": [2, 3, 4, 8, 10, 14], "decad": [2, 3, 10], "serv": 2, "point": [2, 4, 7, 12], "compar": [2, 3, 6, 7], "while": [2, 7, 8, 10, 11, 12, 13, 15], "had": 2, "run": [2, 4, 12, 15], "benchmark": [2, 4], "even": [2, 6, 8, 10, 12, 15], "simpl": [2, 6, 7], "model": [2, 4, 5, 7, 8, 9, 10, 13, 14, 15], "todai": 2, "s": [2, 3, 7, 8, 10, 11, 12, 13, 14, 15], "standard": [2, 3, 4, 12], "95": 2, "unsuit": 2, "distinguish": 2, "between": [2, 12], "stronger": 2, "weaker": 2, "ones": [2, 4, 12, 14, 15], "more": [2, 3, 4, 6, 8, 9, 10, 12, 15], "so": [2, 3, 4, 10, 12], "veri": [2, 10], "typic": [2, 4, 14], "seen": 2, "problem": [2, 4, 8, 10], "skew": 2, "develop": [2, 4, 10, 11, 15], "toward": [2, 15], "famili": 2, "advantag": [2, 3], "clean": 2, "set": [2, 4, 7, 12, 13, 15], "boundari": [2, 7], "seek": 2, "saniti": 2, "check": [2, 3], "imagenet": 2, "deng": 2, "2009": 2, "relev": 2, "unfortun": 2, "larg": [2, 8], "exampl": [2, 3, 4, 9, 10, 11, 12, 14], "illustr": [2, 4, 8, 10], "would": [2, 7, 15], "long": [2, 10], "train": [2, 4, 5, 7, 8, 9, 10, 13], "interact": 2, "substitut": 2, "focu": [2, 3, 10], "discuss": [2, 8, 12], "come": 2, "qualit": 2, "similar": [2, 7], "smaller": 2, "xiao": 2, "2017": 2, "contain": [2, 4, 10, 12, 13], "categori": [2, 4, 7, 13], "cloth": [2, 7], "sinc": [2, 3, 8, 10, 13, 14], "frequent": 2, "major": [2, 12, 15], "provid": [2, 3, 12, 15], "preprocess": [2, 9], "download": 2, "memori": 2, "metadata": 2, "dict": 2, "string": [2, 13], "ani": [2, 12, 14, 15], "4": [2, 3, 4, 6, 7, 8, 10, 12, 13, 14], "split": [2, 12], "10000": [2, 4, 11, 15], "arrai": [2, 5, 6, 12, 15], "int64": [2, 12, 13, 14], "from": [2, 3, 7, 9, 10, 12, 14, 15], "each": [2, 3, 4, 5, 8, 10, 12, 13, 14, 15], "repres": [2, 3, 10, 13, 14], "6": [2, 3, 4, 5, 8, 10, 12, 14], "A": [2, 12, 13, 14], "must": [2, 14], "consequ": [2, 8], "respect": [2, 7, 10, 13], "length": [2, 3, 4, 10, 11, 12, 14], "60000": 2, "binari": [2, 12], "black": [2, 15], "white": 2, "note": [2, 3, 7, 10, 12, 14, 15], "though": [2, 15], "modern": [2, 3, 10], "ha": [2, 3, 10, 14], "channel": 2, "red": 2, "green": 2, "blue": 2, "hyperspectr": 2, "excess": [2, 8], "100": [2, 3, 8, 11, 15], "hymap": 2, "sensor": 2, "126": 2, "By": [2, 3, 14, 15], "convent": [2, 7], "store": [2, 12, 13], "h": [2, 11], "w": [2, 3], "height": 2, "width": 2, "human": 2, "follow": [2, 3, 10, 12, 14], "code": [2, 3, 4, 10, 12, 14], "convert": [2, 13], "numer": [2, 4, 11, 13], "class_nam": 2, "shirt": 2, "trouser": 2, "pullov": 2, "dress": 2, "coat": 2, "sandal": 2, "sneaker": 2, "bag": 2, "ankl": 2, "boot": 2, "get_fashion_mnist_label": 2, "int": [2, 3, 12], "how": [2, 3, 7, 8, 10, 13, 15], "work": [2, 3, 10, 12], "let": [2, 3, 7, 8, 10, 11, 13, 15], "invok": [2, 12, 14], "18": [2, 12, 14], "64": [2, 12], "shuffl": [2, 3], "938": 2, "tupl": [2, 12, 14], "first": [2, 3, 4, 6, 10, 12, 13, 14, 15], "loader": 2, "blazingli": 2, "fast": [2, 4], "nonetheless": 2, "suffici": 2, "quit": 2, "bit": [2, 8], "longer": 2, "henc": 2, "enough": 2, "io": 2, "constrain": [2, 7], "090352": 2, "second": [2, 4, 6, 12, 14, 15], "23": [2, 12, 14], "06": 2, "k": [2, 4], "alloc": [2, 3, 4, 12], "182": 2, "540": 2, "mib": [2, 4, 5], "17": [2, 12, 14], "56": 2, "gc": 2, "15": [2, 12, 14], "25": [2, 7, 12, 14], "compil": [2, 4], "show_imag": 2, "associ": 2, "imageshow": 2, "real": [2, 3, 7], "column_num": 2, "batch_num": 2, "row_num": 2, "ceil": 2, "fig": [2, 3], "figur": [2, 4], "slice": 2, "zip": [2, 4], "eachslic": 2, "dim": [2, 12, 14], "cartesianindic": 2, "2": [2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15], "rotr90": 2, "convert2imag": 2, "aspect": 2, "dataaspect": 2, "titl": 2, "xticksvis": 2, "fals": [2, 12, 13], "xticklabelsvis": 2, "yticksvis": 2, "yticklabelsvis": 2, "In": [2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15], "idea": [2, 8, 10], "inspect": [2, 3, 12], "re": 2, "spot": 2, "unusu": 2, "addit": [2, 14], "safeguard": 2, "against": [2, 3], "mistak": 2, "design": [2, 9, 13, 14], "experi": [2, 3, 11, 15], "correspond": [2, 4, 7, 12, 13, 14, 15], "text": [2, 10], "wit": 3, "cambrian": 3, "explos": 3, "past": [3, 10], "sheer": 3, "number": [3, 10, 12, 13, 14, 15], "techniqu": [3, 9, 10], "applic": 3, "far": [3, 8, 10], "surpass": 3, "progress": 3, "previou": [3, 5, 15], "due": 3, "fortuit": 3, "combin": 3, "multipl": [3, 6, 12, 15], "factor": 3, "one": [3, 4, 6, 12, 13, 14, 15], "power": 3, "free": 3, "offer": [3, 10, 14], "open": [3, 13], "sourc": 3, "theano": 3, "bergstra": 3, "2010": [3, 9], "distbelief": 3, "dean": 3, "2012": 3, "caff": 3, "jia": 3, "2014": 3, "arguabl": 3, "found": 3, "widespread": 3, "adopt": 3, "contrast": [3, 15], "earlier": 3, "semin": 3, "like": [3, 8, 12, 13, 15], "sn2": 3, "simulateur": 3, "neuristiqu": 3, "bottou": 3, "le": 3, "cun": 3, "1988": 3, "lisp": 3, "automat": [3, 12], "differenti": [3, 7], "julia": [3, 4, 12, 14], "These": [3, 13], "modular": 3, "repetit": 3, "gradient": 3, "base": [3, 4, 12, 13], "becaus": [3, 7, 12, 15], "iter": [3, 10], "neural": [3, 7, 8, 12], "common": [3, 4, 7, 10, 13], "well": [3, 10], "show": [3, 10, 12], "api": [3, 5, 6, 7], "succinct": 3, "snippet": [3, 10, 12, 14], "drawn": [3, 12], "normal": [3, 8, 12], "distribut": [3, 7, 8, 12, 15], "synthetic_data": 3, "b": [3, 4, 10, 12, 14], "num_exampl": 3, "rand": [3, 8, 15], "0f0": [3, 12, 14], "1f0": 3, "01f0": 3, "return": [3, 10, 12, 15], "later": [3, 4], "estim": [3, 4, 13, 15], "ground": 3, "truth": 3, "valu": [3, 4, 7, 10, 12, 13, 14, 15], "true_w": 3, "true_b": 3, "4412894": 3, "1683054": 3, "3911616": 3, "98486364": 3, "9546863": 3, "6044618": 3, "8892765": 3, "543286": 3, "5628222349681895": 3, "486395385302604": 3, "9511675149202348": 3, "3048679489642385": 3, "println": [3, 8], "some": [3, 7, 8, 9, 10, 11, 13, 14, 15], "intuit": [3, 7, 9, 11, 15], "minibatch": [3, 4], "both": [3, 8, 9, 10, 12, 14], "match": 3, "given": [3, 12, 13, 15], "batch_siz": 3, "oper": [3, 4, 7, 10, 14], "predefin": 3, "worri": 3, "recal": [3, 10, 14], "architectur": 3, "singl": [3, 4, 8, 12], "describ": [3, 15], "call": [3, 4, 10, 12, 13, 14, 15], "denot": 3, "neuron": [3, 7, 8], "two": [3, 4, 6, 12, 13, 14, 15], "mse": 3, "comput": [3, 4, 12, 14], "squar": 3, "default": [3, 7, 8, 10, 14], "averag": [3, 14], "own": 3, "classic": [3, 4], "optimis": 3, "opt": 3, "might": [3, 6, 8, 9, 10, 13, 15], "notic": [3, 12, 13], "express": [3, 14], "through": [3, 5, 8, 9, 10], "requir": [3, 4, 8, 9, 10, 15], "fewer": 3, "did": [3, 15], "individu": [3, 10, 14, 15], "onc": 3, "start": [3, 4, 9, 10, 14, 15], "complex": [3, 6, 10], "grow": [3, 10, 14, 15], "consider": [3, 9], "printf": [3, 11], "n": [3, 4, 11, 14, 15], "381278": 3, "007915": 3, "000265": 3, "finit": [3, 15], "actual": [3, 7], "access": [3, 12, 14], "weight": [3, 7, 9], "bia": [3, 7], "counterpart": 3, "vec": 3, "0016717910766601562": 3, "0073896884918212": 3, "00999946594238299": 3, "pop": 4, "up": [4, 8, 10, 14, 15], "whenev": [4, 13, 15], "want": [4, 10, 12, 14, 15], "predict": [4, 13, 15], "includ": [4, 9, 12], "price": [4, 13], "home": [4, 13], "stock": 4, "etc": 4, "stai": 4, "patient": [4, 15], "hospit": 4, "forecast": 4, "demand": 4, "retail": 4, "sale": 4, "among": [4, 10], "countless": 4, "Not": [4, 13], "everi": [4, 8, 12], "introduc": [4, 7, 9], "classif": 4, "where": [4, 6, 8, 10, 12, 13, 14, 15], "goal": 4, "membership": 4, "suppos": [4, 10], "wish": [4, 10, 12, 14, 15], "hous": 4, "dollar": 4, "area": 4, "feet": 4, "ag": 4, "year": [4, 15], "get": [4, 7, 13, 15], "hand": [4, 7, 9, 10], "terminolog": 4, "dataset": [4, 9, 14, 15], "row": [4, 12, 13, 14], "instanc": [4, 10, 12, 14], "sampl": [4, 12, 15], "try": 4, "upon": [4, 13], "covari": 4, "when": [4, 5, 6, 7, 8, 10, 12, 14, 15], "whole": [4, 12], "simultan": 4, "effici": 4, "calcul": [4, 7, 10, 14], "leverag": 4, "algebra": 4, "costli": 4, "loop": [4, 6, 10], "why": [4, 8], "matter": [4, 7, 14], "ad": [4, 6, 7, 14], "reli": [4, 6], "now": [4, 6, 7, 8, 9, 10, 13, 14], "workload": 4, "them": [4, 7, 8, 9, 10, 12], "coordin": [4, 7], "c": [4, 10], "ae": 4, "052413": 4, "151": 4, "62": 4, "379": 4, "88": 4, "12": [4, 10, 12, 14], "altern": 4, "reload": 4, "elementwis": [4, 12, 14], "sum": [4, 7, 10, 12, 15], "d": 4, "000037": 4, "78": [4, 12], "234": 4, "kib": [4, 6], "dramat": 4, "often": [4, 10, 12, 14, 15], "yield": [4, 10], "order": [4, 10, 12], "magnitud": [4, 8], "speedup": 4, "moreov": [4, 8, 15], "push": 4, "mathemat": [4, 7, 11, 14, 15], "without": [4, 12], "ourselv": [4, 15], "reduc": [4, 8, 12, 14], "potenti": 4, "increas": 4, "portabl": 4, "visual": 4, "7": [4, 8, 12, 14], "01": 4, "deviat": [4, 12, 15], "pair": 4, "param": 4, "ylabel": [4, 7, 11, 15], "p": [4, 15], "xtick": [4, 15], "\u03bc": 4, "\u03c3": 4, "std": 4, "lt": [4, 8, 11], "With": 5, "pass": [5, 10, 14], "probabl": [5, 7, 12], "onli": [5, 6, 7, 10, 12, 14, 15], "argument": [5, 12, 15], "constructor": 5, "dure": 5, "randomli": [5, 12], "drop": [5, 13, 14], "out": [5, 10, 12, 13, 15], "equival": [5, 12, 14], "accord": [5, 8, 12], "specifi": [5, 8, 12, 14], "mode": 5, "simpli": [5, 13, 14], "dropout1": 5, "dropout2": 5, "relu": [5, 6, 8], "200_960": [5, 6], "nnlib": [5, 6], "65_792": 5, "2_570": [5, 6], "total": [5, 6, 12, 14], "39m269_322": 5, "028": 5, "plot": [5, 7], "mlp": 6, "conceptu": 6, "differ": [6, 12, 15], "concaten": [6, 12], "expect": [6, 10, 15], "softmax": [6, 7], "regress": [6, 7], "previous": 6, "hidden": 6, "39m203_530": 6, "795": 6, "289": 6, "exactli": 6, "68876016": 6, "56865656": 6, "49360403": 6, "44557437": 6, "4166209": 6, "3979724": 6, "38223523": 6, "3682386": 6, "3582719": 6, "34964567": 6, "7618166666666667": 6, "8034333333333333": 6, "8294": 6, "8449666666666666": 6, "8544833333333334": 6, "8608833333333333": 6, "86575": 6, "8708833333333333": 6, "8740666666666667": 6, "8769666666666667": 6, "752": 6, "791": 6, "8153": 6, "8304": 6, "8402": 6, "8449": 6, "849": 6, "8545": 6, "8566": 6, "8581": 6, "implement": [7, 8, 14, 15], "scratch": [7, 15], "capabl": 7, "recogn": 7, "along": [7, 12, 14], "wrangl": 7, "coerc": 7, "valid": 7, "appli": [7, 10, 12, 15], "appropri": [7, 14], "minim": 7, "master": [7, 10], "mechan": [7, 12, 14], "context": [7, 13], "launch": 7, "explor": [7, 10], "rich": 7, "class": 7, "primarili": 7, "concern": [7, 10, 15], "decid": 7, "whether": [7, 15], "should": [7, 14, 15], "further": [7, 10], "transform": [7, 12], "signal": 7, "non": [7, 15], "fundament": [7, 14], "briefli": 7, "survei": 7, "inform": 7, "retain": [7, 12], "discard": [7, 13], "neg": 7, "gain": [7, 9], "piecewis": 7, "8": [7, 8, 10, 12, 14], "deriv": [7, 10], "precis": 7, "equal": [7, 12], "case": [7, 10, 12], "left": 7, "side": 7, "sai": [7, 10, 14], "awai": 7, "never": 7, "zero": [7, 8, 12], "mathematician": 7, "nondifferenti": 7, "measur": [7, 15], "There": 7, "old": 7, "adag": 7, "subtl": 7, "condit": [7, 10, 12], "engin": 7, "That": [7, 12, 15], "wisdom": 7, "least": 7, "fact": [7, 10, 14, 15], "optim": [7, 8, 10], "mangasarian": 7, "1965": 7, "rockafellar": 7, "1970": 7, "zygot": [7, 10], "grad": [7, 10], "approach": [7, 9], "maximum": 7, "diverg": 7, "either": [7, 8, 12, 13], "direct": [7, 10], "nears": 7, "although": [7, 14], "exhibit": [7, 9], "symmetri": 7, "system": [7, 12], "kalman": 7, "kwasni": 7, "1992": 7, "And": [7, 12, 15], "saw": [7, 15], "move": [7, 8, 10], "thu": [8, 10, 12], "pre": 8, "until": 8, "took": 8, "scheme": 8, "grant": 8, "gloss": 8, "detail": [8, 9], "gotten": 8, "impress": 8, "especi": 8, "import": [8, 13], "contrari": 8, "plai": 8, "signific": [8, 12], "role": 8, "crucial": [8, 10], "maintain": 8, "ti": 8, "interest": [8, 15], "nonlinear": 8, "choos": 8, "determin": [8, 15], "quickli": 8, "converg": [8, 15], "poor": 8, "caus": [8, 12], "encount": [8, 15], "delv": 8, "topic": 8, "greater": [8, 15], "heurist": [8, 13], "find": 8, "throughout": [8, 13], "career": [8, 9, 13, 15], "risk": 8, "unstabl": 8, "go": 8, "beyond": 8, "represent": 8, "unpredict": 8, "also": [8, 12, 13, 14], "threaten": 8, "face": 8, "updat": [8, 12, 15], "destroi": 8, "ii": [8, 12, 15], "small": [8, 15], "render": 8, "imposs": [8, 10], "hardli": 8, "earli": 8, "artifici": 8, "were": [8, 10, 15], "inspir": 8, "biolog": 8, "fire": 8, "seem": 8, "appeal": 8, "closer": 8, "sigmoid": 8, "backpropag": [8, 10], "unless": 8, "goldilock": 8, "zone": 8, "overal": 8, "product": [8, 12], "boast": [8, 9], "care": [8, 15], "cut": 8, "off": [8, 10, 15], "inde": [8, 11], "plagu": 8, "stabl": 8, "less": 8, "plausibl": 8, "emerg": 8, "practition": 8, "opposit": 8, "vex": 8, "draw": [8, 15], "gaussian": [8, 12], "random": [8, 10, 15], "matric": [8, 12], "multipli": [8, 14], "m": [8, 14], "displai": [8, 13, 14], "float64": [8, 10, 12, 13, 14], "05678": 8, "263555": 8, "205375": 8, "19783": 8, "23638": 8, "675443": 8, "11012": 8, "15837": 8, "960691": 8, "628987": 8, "189805": 8, "03047": 8, "98534": 8, "107866": 8, "917991": 8, "507334": 8, "98955e22": 8, "03892e23": 8, "26077e20": 8, "06923e22": 8, "07651e23": 8, "05706e23": 8, "69729e20": 8, "39717e23": 8, "68355e23": 8, "8281e23": 8, "8288e20": 8, "09805e23": 8, "11011e23": 8, "15556e23": 8, "82741e20": 8, "43611e23": 8, "basic": 9, "regular": 9, "decai": 9, "dropout": 9, "readi": 9, "particip": 9, "competit": 9, "place": [9, 12], "fairli": [9, 15], "exot": 9, "structur": 9, "special": [9, 13], "audio": 9, "video": 9, "collect": [9, 10, 12, 14, 15], "de": 9, "cock": 9, "2011": 9, "am": 9, "ia": 9, "period": 9, "2006": 9, "larger": [9, 12], "famou": 9, "boston": 9, "harrison": 9, "rubinfeld": 9, "1978": 9, "walk": 9, "hyperparamet": 9, "select": [9, 12, 13], "hope": [9, 15], "guid": 9, "scientist": 9, "step": [10, 12, 13], "straightforward": 10, "tediou": 10, "prone": 10, "becom": [10, 14], "fortun": 10, "plate": 10, "shorten": 10, "autograd": 10, "success": [10, 15], "graph": 10, "track": 10, "rule": [10, 15], "hot": [10, 13], "histori": 10, "earliest": 10, "date": 10, "back": [10, 15], "half": 10, "centuri": 10, "wengert": 10, "1964": 10, "core": 10, "behind": 10, "phd": 10, "thesi": 10, "1980": 10, "speelpen": 10, "late": 10, "griewank": 10, "1989": 10, "option": 10, "emploi": [10, 15], "forward": 10, "propag": 10, "revel": 10, "2016": 10, "befor": [10, 12], "assign": [10, 12, 14, 15], "initi": [10, 12], "defin": [10, 12], "linearalgebra": [10, 14], "2x": [10, 11], "16": [10, 12, 14], "verifi": 10, "ident": [10, 12, 15], "4x": [10, 11], "natur": 10, "interpret": [10, 15], "jacobian": 10, "partial": 10, "higher": [10, 12], "could": [10, 12], "tensor": 10, "advanc": 10, "commonli": 10, "full": 10, "separ": [10, 13], "batch": 10, "sometim": [10, 12, 14, 15], "outsid": 10, "record": [10, 13, 14], "auxiliari": 10, "intermedi": 10, "term": [10, 14], "final": [10, 12], "toi": 10, "clearer": 10, "z": 10, "influenc": 10, "convei": 10, "via": [10, 12, 13, 14], "new": [10, 12, 15], "u": [10, 14], "whose": [10, 12, 13], "proven": 10, "been": [10, 15], "wipe": 10, "ancestor": 10, "procedur": [10, 12], "lead": 10, "persist": [10, 13], "review": 10, "path": 10, "lot": 10, "freedom": 10, "benefit": 10, "maze": 10, "e": [10, 12, 13, 15], "g": [10, 12, 13, 15], "arbitrari": [10, 14], "still": [10, 12], "statement": [10, 12], "2a": 10, "norm": 10, "1000": 10, "2b": 10, "100b": 10, "what": [10, 12, 15], "form": [10, 12], "randn": [10, 12], "dynam": 10, "vital": 10, "statist": [10, 13, 14], "priori": 10, "3x": 11, "lack": 11, "rigor": 11, "proof": 11, "soon": 11, "5f": 11, "limit": 11, "30000": 11, "01000": 11, "03000": 11, "00100": 11, "00300": 11, "00010": 11, "00030": 11, "00001": 11, "00003": 11, "slope": 11, "maki": 11, "rang": [11, 12], "fg": [11, 15], "unitrang": [12, 14], "syntax": 12, "11": [12, 14], "shorthand": 12, "deal": 12, "alter": 12, "laid": 12, "column": [12, 13, 14], "permut": 12, "permutedim": 12, "transpos": [12, 14], "4x3": 12, "eltyp": [12, 14], "alia": 12, "list": 12, "multi": [12, 14], "x2": 12, "view": 12, "copi": [12, 14], "independ": 12, "0725183": 12, "383395": 12, "87141": 12, "51073": 12, "33734": 12, "74673": 12, "600773": 12, "4579": 12, "300499": 12, "348163": 12, "58002": 12, "50599": 12, "suppli": 12, "exact": 12, "begin": [12, 15], "unfold": 12, "third": 12, "realiti": 12, "36": [12, 14], "13": [12, 14], "27": 12, "29": 12, "21": [12, 14], "33": 12, "22": [12, 14], "34": 12, "35": 12, "24": [12, 14], "30": 12, "dot": 12, "unari": 12, "exp": 12, "7182817": 12, "20": [12, 14], "085537": 12, "54": 12, "59815": 12, "148": 12, "41316": 12, "403": 12, "4288": 12, "1096": 12, "6332": 12, "2980": 12, "958": 12, "8103": 12, "084": 12, "22026": 12, "467": 12, "59874": 12, "14": [12, 13, 14], "162754": 12, "togeth": 12, "stack": 12, "tell": [12, 15], "happen": [12, 13, 15], "vcat": 12, "hcat": 12, "block": 12, "diagon": 12, "cat": 12, "logic": 12, "j": 12, "otherwis": 12, "bitmatrix": 12, "under": [12, 15], "certain": 12, "expand": 12, "host": 12, "derefer": 12, "instead": 12, "newli": 12, "demonstr": [12, 13], "issu": 12, "objectid": 12, "mutabl": 12, "composit": 12, "type": [12, 13, 14, 15], "object": [12, 15], "locat": [12, 13], "howev": 12, "pars": 12, "fuse": 12, "csv": 13, "datafram": 13, "featuretransform": 13, "comma": 13, "ubiquit": 13, "tabular": 13, "spreadsheet": 13, "sever": 13, "field": [13, 15], "albert": 13, "einstein": 13, "march": 13, "1879": 13, "ulm": 13, "feder": 13, "polytechn": 13, "school": 13, "accomplish": 13, "gravit": 13, "physic": 13, "load": [13, 14], "house_tini": 13, "distinct": [13, 14], "room": 13, "numroom": 13, "roof": 13, "rooftyp": 13, "csv_data": 13, "127500": 13, "106000": 13, "slate": 13, "178100": 13, "140000": 13, "dir_path": 13, "joinpath": 13, "file_path": 13, "mkpath": 13, "iobuff": 13, "dataframerownumroomsrooftypepriceint64": 13, "string7": 13, "int641missingmissing12750022missing10600034slate1781004missingmissing140000": 13, "supervis": [13, 15], "versu": 13, "integ": 13, "index": [13, 14], "replac": 13, "miss": 13, "empti": 13, "270000": 13, "bed": 13, "bug": 13, "scienc": 13, "menac": 13, "confront": 13, "handl": 13, "imput": 13, "delet": 13, "those": 13, "categor": 13, "treat": 13, "rooftype_sl": 13, "rooftype_miss": 13, "hold": 13, "uniqu": [13, 15], "roof_typ": 13, "encod": 13, "append": 13, "apply_append": 13, "onehotencod": 13, "col": 13, "header": 13, "rooftype_": 13, "dataframerownumroomsrooftype_missingrooftype_slateint64": 13, "boolbool1missingtruefalse22truefalse34falsetrue4missingtruefals": 13, "skipmiss": 13, "dataframerownumroomsrooftype_missingrooftype_slatefloat64boolbool13": 13, "0truefalse22": 13, "0truefalse34": 13, "0falsetrue43": 13, "0truefals": 13, "manipul": 14, "sophist": 14, "gentl": 14, "introduct": 14, "essenti": 14, "concept": 14, "ramp": 14, "familiar": 14, "divis": 14, "exponenti": 14, "purpos": 14, "think": [14, 15], "fix": 14, "indic": 14, "desir": 14, "adjoint": 14, "symmetr": 14, "attribut": 14, "analog": 14, "19": 14, "handi": 14, "produc": 14, "operand": 14, "hadamard": 14, "26": 14, "dropdim": 14, "singleton": 14, "relat": 14, "quantiti": 14, "divid": [14, 15], "part": 14, "5f0": 14, "1x3": 14, "keep": 14, "unchang": 14, "broadcast": 14, "behavior": 14, "sum_a": 14, "111111": 14, "333333": 14, "555556": 14, "166667": 14, "cumul": 14, "cumsum": [14, 15], "doe": 14, "tab": 14, "complet": 14, "cdot": 14, "repl": 14, "obtain": 14, "simplifi": 14, "confus": 14, "ell_2": 14, "ell_1": 14, "frobeniu": 14, "uncertainti": 15, "someth": 15, "unknown": 15, "known": 15, "attempt": 15, "Or": 15, "smallest": 15, "quantifi": 15, "suffer": 15, "heart": 15, "attack": 15, "unsupervis": 15, "anomal": 15, "observ": 15, "popul": 15, "reinforc": 15, "agent": 15, "act": 15, "intellig": 15, "variou": 15, "environ": 15, "reason": 15, "reward": 15, "respons": 15, "avail": 15, "action": 15, "probabilist": 15, "likelihood": 15, "event": 15, "frequenc": 15, "repeat": 15, "uncontroversi": 15, "frequentist": 15, "scholar": 15, "adher": 15, "bayesian": 15, "broadli": 15, "formal": 15, "character": 15, "degre": 15, "belief": 15, "moon": 15, "chees": 15, "subject": 15, "unambigu": 15, "light": 15, "evid": 15, "prior": 15, "backward": 15, "infer": 15, "analyz": 15, "hunt": 15, "pattern": 15, "broader": 15, "cours": 15, "theses": 15, "depart": 15, "compani": 15, "institut": 15, "devot": 15, "studi": 15, "surfac": 15, "foundat": 15, "float": 15, "num_toss": 15, "head": 15, "_": 15, "tail": 15, "print": 15, "52": 15, "48": 15, "simul": 15, "outcom": 15, "roll": 15, "die": 15, "binomi": 15, "trial": 15, "omit": 15, "ten": 15, "fair": 15, "occurr": 15, "55": 15, "45": 15, "receiv": 15, "give": 15, "intend": 15, "count": 15, "drew": 15, "slightli": 15, "unfair": 15, "artifact": 15, "5111": 15, "4889": 15, "evolv": 15, "cum_count": 15, "ytick": 15, "2000": 15, "hline": 15, "color": 15, "solid": 15, "curv": 15, "turn": 15, "group": 15, "underli": 15, "conduct": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dive": 0, "deep": 0, "learn": 0, "julia": [0, 10], "code": 0, "implement": [0, 1, 3, 5, 6], "standatd": 0, "tip": 0, "local": 0, "instal": 0, "pre": 0, "requisit": 0, "contribut": 0, "concis": [1, 3, 5, 6], "softmax": 1, "regress": [1, 3, 4], "defin": [1, 3], "model": [1, 3, 6], "revisit": 1, "train": [1, 3, 6], "The": [2, 4], "imag": 2, "classif": 2, "dataset": [2, 3, 13], "load": 2, "read": [2, 3, 13], "minibatch": 2, "visual": [2, 11], "linear": [3, 4, 14], "gener": 3, "loss": [3, 4], "function": [3, 7, 10], "optim": 3, "algorithm": 3, "vector": [4, 14], "speed": 4, "normal": 4, "distribut": 4, "squar": 4, "dropout": 5, "multilay": [6, 7], "perceptron": [6, 7], "activ": 7, "relu": 7, "sigmoid": 7, "tanh": 7, "numer": 8, "stabil": 8, "initi": 8, "vanish": 8, "explod": 8, "gradient": [8, 10], "predict": 9, "hous": 9, "price": 9, "kaggl": 9, "download": 9, "data": [9, 12, 13], "automat": 10, "differenti": [10, 11], "A": [10, 15], "simpl": [10, 15], "backward": 10, "non": [10, 14], "scalar": [10, 14], "variabl": 10, "detach": 10, "comput": 10, "control": 10, "flow": 10, "calculu": 11, "deriv": 11, "util": 11, "manipul": 12, "get": 12, "start": 12, "index": 12, "slice": 12, "oper": 12, "broadcast": 12, "save": 12, "memori": 12, "preprocess": 13, "prepar": 13, "convers": 13, "matrix": [13, 14], "algebra": 14, "matric": 14, "arrai": 14, "basic": 14, "properti": 14, "arithmet": 14, "reduct": 14, "sum": 14, "dot": 14, "product": 14, "multipl": 14, "norm": 14, "probabl": 15, "statist": 15, "exampl": 15, "toss": 15, "coin": 15}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})