# Jupyterlab Extensions Quirkshop - React in JupyterLab

Follow below steps.

```bash
# Create your conda environment.
conda create -y \
  -n quirkshop \
  python=3.8 \
  nodejs=14.5.0 \
  yarn=1.22.5 \
  cookiecutter
conda activate quirkshop
mkdir quirkshop && \
 cd quirkshop
```

```bash
# Clone and build jupyterlab.
git clone https://github.com/jupyterlab/jupyterlab \
    -b v2.2.8 \
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
  --checkout v2.0
```

```bash
# Build the extension and link for dev.
cd quirkshop-jlab-react && \
  yarn && \
  yarn build && \
  jupyter labextension link .
```

```bash
# Watch the extension in shell 1.
cd quirkshop-jlab-react && \
  yarn watch
```

```bash
# Run and watch jupyterlab in shell 2.
mkdir ~/notebooks
jlab --watch --notebook-dir=~/notebooks
```
