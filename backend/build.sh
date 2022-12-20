rm function.zip

python3.9 -m pip install --upgrade pip

python3.9 -m pip install \
    --platform manylinux2014_x86_64 \
    --target=./venv/lib/python3.9/site-packages \
    --implementation cp \
    --python 3.9 \
    --only-binary=:all: --upgrade \
    pandas numpy==1.23.5 fastapi mangum

# cd venv/Lib/site-packages/
cd ./venv/lib/python3.9/site-packages/

zip -r9 ../../../../function.zip .

cd ../../../../

zip -g ./function.zip -r app