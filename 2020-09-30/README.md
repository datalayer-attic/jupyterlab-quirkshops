# Jupyterlab Extensions Quirkshop - React in JupyterLab

Follow below steps.

```bash
conda deactivate && \
  conda remove -y --all -n quirkshop-jlab2
# Create your conda environment.
conda create -y \
  -n quirkshop-jlab2 \
  python=3.8 \
  nodejs=14.5.0 \
  yarn=1.22.5 \
  cookiecutter
conda activate quirkshop-jlab2
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
  jlpm && \
  jlpm build && \
  jupyter labextension link . && \
  cd ..
```

```bash
# Watch the extension in shell 1.
cd quirkshop-jlab-react && \
  jlpm watch
```

```bash
# Run and watch jupyterlab in shell 2.
mkdir ~/notebooks && \
  jupyter lab --watch --notebook-dir=~/notebooks
```
