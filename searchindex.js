Search.setIndex({"docnames": ["README", "notebooks/chapter_preliminaries/Automatic Differentiation", "notebooks/chapter_preliminaries/Calculus", "notebooks/chapter_preliminaries/Data Manipulation", "notebooks/chapter_preliminaries/Data Preprocessing", "notebooks/chapter_preliminaries/Linear Algebra"], "filenames": ["README.md", "notebooks/chapter_preliminaries/Automatic Differentiation.ipynb", "notebooks/chapter_preliminaries/Calculus.ipynb", "notebooks/chapter_preliminaries/Data Manipulation.ipynb", "notebooks/chapter_preliminaries/Data Preprocessing.ipynb", "notebooks/chapter_preliminaries/Linear Algebra.ipynb"], "titles": ["Dive into Deep Learning - Julia", "<span class=\"section-number\">5. </span>Automatic Differentiation", "<span class=\"section-number\">4. </span>Calculus", "<span class=\"section-number\">1. </span>Data Manipulation", "<span class=\"section-number\">2. </span>Data Preprocessing", "<span class=\"section-number\">3. </span>Linear Algebra"], "terms": {"program": [0, 1, 3], "languag": [0, 1, 3], "flux": 0, "jl": [0, 4], "thi": [0, 1, 2, 3, 4, 5], "tutori": 0, "mainli": 0, "focus": 0, "us": [0, 1, 2, 3, 4, 5], "pure": 0, "implement": [0, 5], "code": [0, 3, 5], "lear": 0, "rather": 0, "than": [0, 3], "explain": 0, "specif": [0, 5], "principl": 0, "If": [0, 3, 5], "you": [0, 3, 4, 5], "know": 0, "littl": 0, "about": [0, 3], "pleas": 0, "refer": [0, 1], "same": [0, 3, 5], "chapter": 0, "origin": [0, 3, 4, 5], "book": 0, "jupyterlab": 0, "desktop": 0, "vscode": 0, "jupyt": 0, "plugin": 0, "1": [0, 2, 3, 4, 5], "9": [0, 3, 5], "v": 0, "version": 0, "clone": 0, "project": 0, "chang": [0, 3], "directori": 0, "d2ljulia": 0, "depend": [0, 1, 4], "pkg": 0, "activ": 0, "instanti": 0, "ll": 0, "all": [0, 1, 3, 4, 5], "mai": [0, 3], "take": [0, 1, 3, 4], "few": [0, 5], "minut": 0, "welcom": 0, "just": [0, 3, 5], "add": 0, "ipynb": 0, "file": [0, 4], "notebook": 0, "folder": 0, "creat": [0, 3, 4, 5], "an": [0, 2, 3, 4, 5], "entri": [0, 3, 4], "_toc": 0, "yml": 0, "The": [0, 1, 3, 4, 5], "websit": 0, "built": [0, 5], "recal": [1, 5], "from": [1, 3, 5], "section": [1, 4, 5], "2": [1, 2, 3, 4, 5], "4": [1, 3, 4, 5], "calcul": [1, 5], "deriv": 1, "crucial": 1, "step": [1, 3, 4], "optim": 1, "algorithm": 1, "we": [1, 2, 3, 4, 5], "train": [1, 4], "deep": 1, "network": [1, 3], "while": [1, 2, 3, 4], "ar": [1, 3, 4, 5], "straightforward": 1, "work": [1, 3], "them": [1, 3], "out": [1, 3, 4], "hand": 1, "can": [1, 2, 3, 4, 5], "tediou": 1, "error": 1, "prone": 1, "problem": 1, "onli": [1, 3, 5], "grow": [1, 5], "our": [1, 3, 4, 5], "model": [1, 4, 5], "becom": [1, 5], "more": [1, 3], "complex": 1, "fortun": 1, "modern": 1, "learn": [1, 4], "framework": 1, "off": 1, "plate": 1, "offer": [1, 5], "often": [1, 3, 5], "shorten": 1, "autograd": 1, "As": 1, "pass": [1, 5], "data": 1, "through": 1, "each": [1, 3, 4, 5], "success": 1, "build": [1, 5], "comput": [1, 3, 5], "graph": 1, "track": 1, "how": [1, 4], "valu": [1, 3, 4, 5], "other": [1, 3], "To": [1, 3, 4, 5], "backward": 1, "appli": [1, 3], "chain": 1, "rule": 1, "fashion": 1, "call": [1, 3, 4, 5], "backpropag": 1, "librari": 1, "have": [1, 3, 4, 5], "hot": [1, 4], "concern": 1, "over": [1, 5], "past": 1, "decad": 1, "thei": [1, 4], "long": 1, "histori": 1, "In": [1, 3, 4, 5], "fact": [1, 5], "earliest": 1, "date": 1, "back": 1, "half": 1, "centuri": 1, "wengert": 1, "1964": 1, "core": 1, "idea": 1, "behind": 1, "phd": 1, "thesi": 1, "1980": 1, "speelpen": 1, "were": 1, "further": 1, "develop": [1, 2], "late": 1, "griewank": 1, "1989": 1, "ha": [1, 5], "default": [1, 5], "method": [1, 2, 5], "gradient": 1, "option": 1, "For": [1, 3, 4, 5], "instanc": [1, 3, 5], "julia": [1, 3, 5], "emploi": 1, "forward": 1, "propag": 1, "revel": 1, "et": 1, "al": 1, "2016": 1, "befor": [1, 3], "explor": 1, "let": [1, 2, 4], "s": [1, 2, 3, 4, 5], "first": [1, 3, 4, 5], "master": 1, "zygot": 1, "packag": [1, 2, 5], "some": [2, 4, 5], "intuit": 2, "exampl": [2, 3, 5], "f": 2, "x": [2, 3, 4, 5], "3x": 2, "4x": 2, "gener": [2, 5], "function": [2, 3, 5], "experi": 2, "lack": 2, "rigor": 2, "mathemat": [2, 5], "proof": 2, "soon": 2, "see": 2, "inde": 2, "printf": 2, "h": 2, "10": [2, 3, 5], "0": [2, 3, 4, 5], "5": [2, 3, 5], "5f": 2, "numer": [2, 4], "limit": 2, "n": [2, 5], "end": [2, 3], "10000": 2, "30000": 2, "01000": 2, "03000": 2, "00100": 2, "00300": 2, "00010": 2, "00030": 2, "00001": 2, "00003": 2, "slope": 2, "maki": 2, "cairomaki": 2, "rang": [2, 3], "3": [2, 3, 4, 5], "length": [2, 3, 5], "100": 2, "fg": 2, "ax": [2, 5], "line": [2, 4], "label": 2, "2x": 2, "linestyl": 2, "dash": 2, "tangent": 2, "axislegend": 2, "posit": [2, 3], "lt": 2, "xlabel": 2, "ylabel": 2, "new": 3, "vector": [3, 4], "unitrang": [3, 5], "syntax": 3, "b": [3, 5], "includ": 3, "also": [3, 4, 5], "split": 3, "one": [3, 4, 5], "argument": 3, "mani": 3, "differ": 3, "float32": [3, 5], "12": [3, 5], "element": [3, 4, 5], "6": [3, 5], "7": [3, 5], "8": [3, 5], "11": [3, 5], "equival": [3, 5], "collect": [3, 5], "signific": 3, "between": 3, "arrai": 3, "0f0": [3, 5], "dimension": [3, 5], "int": 3, "shorthand": 3, "true": [3, 4, 5], "access": [3, 5], "shape": [3, 5], "along": [3, 5], "axi": [3, 5], "via": [3, 4, 5], "size": [3, 5], "return": 3, "tupl": [3, 5], "contain": [3, 4], "dimens": [3, 5], "specifi": [3, 5], "becaus": 3, "deal": 3, "here": [3, 4, 5], "singl": 3, "ident": 3, "inspect": 3, "total": [3, 5], "number": [3, 4, 5], "matrix": 3, "without": 3, "alter": 3, "its": [3, 5], "invok": [3, 5], "reshap": [3, 5], "transform": 3, "whose": [3, 4], "retain": 3, "notic": [3, 4], "laid": 3, "column": [3, 4, 5], "time": 3, "thu": 3, "major": 3, "want": [3, 5], "permut": 3, "permutedim": 3, "transpos": [3, 5], "4x3": 3, "eltyp": [3, 5], "like": [3, 4], "alia": 3, "either": [3, 4], "list": 3, "At": 3, "most": [3, 5], "which": [3, 5], "case": 3, "product": 3, "equal": 3, "could": 3, "construct": [3, 5], "higher": 3, "multi": [3, 5], "x2": 3, "view": 3, "mean": [3, 4, 5], "copi": [3, 5], "form": 3, "set": [3, 4], "zero": 3, "int64": [3, 4, 5], "similarli": 3, "ones": [3, 5], "float64": [3, 4, 5], "wish": [3, 5], "sampl": 3, "randomli": 3, "independ": 3, "given": [3, 4], "probabl": 3, "distribut": 3, "paramet": [3, 5], "neural": 3, "initi": 3, "follow": [3, 5], "snippet": [3, 5], "drawn": 3, "standard": 3, "gaussian": 3, "normal": 3, "deviat": 3, "randn": 3, "460108": 3, "797354": 3, "219088": 3, "41176": 3, "598457": 3, "467562": 3, "829768": 3, "2172": 3, "271451": 3, "480919": 3, "31355": 3, "47436": 3, "final": 3, "suppli": 3, "exact": 3, "last": 3, "base": [3, 4], "begin": 3, "whole": 3, "unfold": 3, "e": [3, 4], "g": [3, 4], "where": [3, 4, 5], "when": [3, 5], "order": 3, "select": [3, 4], "row": [3, 4, 5], "And": 3, "second": [3, 5], "third": 3, "realiti": 3, "ani": [3, 5], "A": [3, 4, 5], "36": [3, 5], "13": [3, 5], "25": [3, 5], "15": [3, 5], "27": 3, "17": [3, 5], "29": 3, "assign": [3, 5], "multipl": 3, "discuss": 3, "matric": 3, "21": [3, 5], "33": 3, "16": [3, 5], "22": [3, 5], "28": [3, 5], "34": 3, "23": [3, 5], "35": 3, "18": [3, 5], "24": [3, 5], "30": 3, "dot": 3, "elementwis": [3, 5], "unari": 3, "exp": 3, "7182817": 3, "20": [3, 5], "085537": 3, "54": 3, "59815": 3, "148": 3, "41316": 3, "403": 3, "4288": 3, "1096": 3, "6332": 3, "2980": 3, "958": 3, "8103": 3, "084": 3, "22026": 3, "467": 3, "59874": 3, "14": [3, 4, 5], "162754": 3, "everi": 3, "binari": 3, "correspond": [3, 4, 5], "automat": 3, "defin": 3, "perform": [3, 5], "y": [3, 4, 5], "64": 3, "concaten": 3, "togeth": 3, "stack": 3, "larger": 3, "need": [3, 5], "provid": 3, "tell": 3, "system": 3, "below": [3, 4, 5], "show": 3, "what": 3, "happen": [3, 4], "two": [3, 4, 5], "vcat": 3, "hcat": 3, "dim": [3, 5], "allow": [3, 5], "block": 3, "diagon": 3, "cat": 3, "sometim": [3, 5], "logic": 3, "statement": 3, "i": 3, "j": 3, "result": [3, 5], "otherwis": 3, "bitmatrix": 3, "sum": 3, "reduc": [3, 5], "78": 3, "under": 3, "certain": 3, "condit": 3, "even": 3, "still": 3, "mechan": [3, 5], "accord": 3, "procedur": 3, "expand": 3, "both": [3, 5], "so": 3, "after": [3, 5], "ii": 3, "run": 3, "caus": 3, "alloc": 3, "host": 3, "write": [3, 4], "derefer": 3, "point": 3, "instead": 3, "newli": 3, "demonstr": [3, 4], "issu": 3, "objectid": 3, "mutabl": 3, "composit": 3, "type": [3, 4, 5], "object": 3, "store": [3, 4], "locat": [3, 4], "note": [3, 5], "That": 3, "evalu": 3, "fals": [3, 4], "howev": 3, "place": 3, "updat": 3, "pars": 3, "fuse": 3, "csv": 4, "datafram": 4, "featuretransform": 4, "statist": [4, 5], "comma": 4, "separ": 4, "ubiquit": 4, "tabular": 4, "spreadsheet": 4, "record": [4, 5], "consist": 4, "sever": 4, "field": 4, "albert": 4, "einstein": 4, "march": 4, "1879": 4, "ulm": 4, "feder": 4, "polytechn": 4, "school": 4, "accomplish": 4, "gravit": 4, "physic": 4, "load": [4, 5], "house_tini": 4, "repres": [4, 5], "home": 4, "distinct": [4, 5], "room": 4, "numroom": 4, "roof": 4, "rooftyp": 4, "price": 4, "csv_data": 4, "127500": 4, "106000": 4, "slate": 4, "178100": 4, "140000": 4, "dir_path": 4, "joinpath": 4, "file_path": 4, "mkpath": 4, "iobuff": 4, "now": [4, 5], "import": 4, "open": 4, "dataframerownumroomsrooftypepriceint64": 4, "string7": 4, "int641missingmissing12750022missing10600034slate1781004missingmissing140000": 4, "supervis": 4, "predict": 4, "design": [4, 5], "target": 4, "input": [4, 5], "process": 4, "versu": 4, "name": 4, "integ": 4, "index": [4, 5], "might": 4, "replac": 4, "special": 4, "miss": 4, "whenev": 4, "empti": 4, "270000": 4, "These": 4, "bed": 4, "bug": 4, "scienc": 4, "persist": 4, "menac": 4, "confront": 4, "throughout": 4, "your": 4, "career": 4, "upon": 4, "context": 4, "handl": 4, "imput": 4, "delet": 4, "estim": 4, "simpli": [4, 5], "discard": 4, "those": 4, "common": 4, "heurist": 4, "categor": 4, "treat": 4, "categori": 4, "sinc": [4, 5], "convert": 4, "rooftype_sl": 4, "rooftype_miss": 4, "respect": 4, "hold": 4, "get": 4, "uniqu": 4, "roof_typ": 4, "encod": 4, "append": 4, "apply_append": 4, "onehotencod": 4, "col": 4, "header": 4, "rooftype_": 4, "string": 4, "drop": [4, 5], "Not": 4, "dataframerownumroomsrooftype_missingrooftype_slateint64": 4, "boolbool1missingtruefalse22truefalse34falsetrue4missingtruefals": 4, "skipmiss": 4, "dataframerownumroomsrooftype_missingrooftype_slatefloat64boolbool13": 4, "0truefalse22": 4, "0truefalse34": 4, "0falsetrue43": 4, "0truefals": 4, "displai": [4, 5], "By": 5, "dataset": 5, "manipul": 5, "oper": 5, "start": 5, "sophist": 5, "tool": 5, "gentl": 5, "introduct": 5, "essenti": 5, "concept": 5, "ramp": 5, "up": 5, "familiar": 5, "addit": 5, "divis": 5, "exponenti": 5, "purpos": 5, "think": 5, "fix": 5, "indic": 5, "appropri": 5, "m": 5, "desir": 5, "adjoint": 5, "symmetr": 5, "typic": 5, "individu": 5, "attribut": 5, "analog": 5, "compon": 5, "19": 5, "handi": 5, "produc": 5, "output": 5, "operand": 5, "hadamard": 5, "ad": 5, "multipli": 5, "26": 5, "express": 5, "arbitrari": 5, "should": 5, "dropdim": 5, "singleton": 5, "funcion": 5, "although": 5, "relat": 5, "quantiti": 5, "averag": 5, "divid": 5, "part": 5, "5f0": 5, "likewis": 5, "1x3": 5, "keep": 5, "unchang": 5, "matter": 5, "broadcast": 5, "behavior": 5, "sum_a": 5, "111111": 5, "333333": 5, "555556": 5, "166667": 5, "cumul": 5, "sai": 5, "cumsum": 5, "doe": 5, "One": 5, "fundament": 5, "linearalgebra": 5, "tab": 5, "complet": 5, "cdot": 5, "repl": 5, "must": 5, "obtain": 5, "term": 5, "simplifi": 5, "confus": 5, "ell_2": 5, "u": 5, "ell_1": 5, "frobeniu": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dive": 0, "deep": 0, "learn": 0, "julia": 0, "local": 0, "instal": 0, "pre": 0, "requisit": 0, "contribut": 0, "automat": 1, "differenti": [1, 2], "A": 1, "simpl": 1, "function": 1, "calculu": 2, "deriv": 2, "visual": 2, "util": 2, "data": [3, 4], "manipul": 3, "get": 3, "start": 3, "index": 3, "slice": 3, "oper": 3, "broadcast": 3, "save": 3, "memori": 3, "preprocess": 4, "read": 4, "dataset": 4, "prepar": 4, "convers": 4, "matrix": [4, 5], "linear": 5, "algebra": 5, "scalar": 5, "vector": 5, "matric": 5, "arrai": 5, "basic": 5, "properti": 5, "arithmet": 5, "reduct": 5, "non": 5, "sum": 5, "dot": 5, "product": 5, "multipl": 5, "norm": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})