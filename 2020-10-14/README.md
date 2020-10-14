# Jupyterlab Extensions Quirkshop - Extensions in JupyterLab 3

|              | Python    | Node.js   |
| -------------|:---------:|:---------:|
| Developer    |1️⃣         |2️⃣         |
| User         |           |3️⃣         |

1️⃣ Develop Server + Package all
2️⃣ Build Frontend
3️⃣ Install Dynamic Extensions (Default requirement for Jupyter)

## Develop a JupyterLab3 Extension

```bash
conda deactivate && \
  conda remove -y --all -n quirkshop-dev
# Create your conda environment.
conda create -y \
  -n quirkshop-dev \
  python=3.8 \
  twine \
  nodejs=14.5.0 \
  yarn=1.22.5 \
  cookiecutter
conda activate quirkshop-dev
```

```bash
# Clone and build jupyterlab.
#    -b v3.0.0rc4 \
git clone https://github.com/jupyterlab/jupyterlab \
    --depth 1 && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build && \
  cd ..
```

```bash
# Create an extension skeleton with a cookiecutter.
cookiecutter \
  https://github.com/jupyterlab/extension-cookiecutter-ts \
  --config-file cookiecutter.yaml \
  --checkout 3.0
```

```bash
# Build the extension and link for dev in shell 1.
cd quirkshop_jlab3_react && \
  jupyter labextension develop --overwrite
```

```bash
# List extensions.
jupyter labextension list
pip list | grep quirkshop
```

```bash
# Run and watch jupyterlab in shell 1.
# jupyter labextension watch
jlpm watch
```

```bash
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
mkdir ~/notebooks && \
  jupyter lab --watch --notebook-dir=~/notebooks
```

```bash
# Add instructions to release on PyPI and conda forge
# - https://github.com/jupyterlab/extension-cookiecutter-ts/issues/101
python setup.py sdist bdist_wheel
twine upload dist/* -u $TWINE_USERNAME -p $TWINE_PASSWORD
```

```bash
jupyter lab build
```

## Use a JupyterLab3 Extension

```bash
conda deactivate && \
  conda remove -y --all -n quirkshop-user
# Create your conda environment.
conda create -y \
  -n quirkshop-user \
  python=3.8
conda activate quirkshop-user
pip install --pre jupyterlab==3.0.0rc4
```

```bash
pip install jupyterlab_widgets==1.0.0a5
jupyter labextension list
# Extension Manager!?
jupyter lab --notebook-dir=~/notebooks/04-ipywidgets
```

```bash
# https://pypi.org/project/jupyterlab-geojs/#history
pip search "jupyterlab extension"
pip search "jupyterlab3"
```

```bash
pip install quirkshop-jlab3-react
jupyter labextension list
jupyter lab --notebook-dir=~/notebooks/04-ipywidgets
```

## Migrate

```bash
# Add a migration guide from 2.x to 3.x for extension authors
# - https://github.com/jupyterlab/jupyterlab/issues/9118
# - https://github.com/jupyterlab/jupyterlab/pull/9162
python -m jupyterlab.upgrade_extension .
```
