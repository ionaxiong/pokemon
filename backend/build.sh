rm function.zip

python3.9 -m pip install --upgrade pip

pip install virtualenv

virtualenv venv --python=python3.9

python3.9 -m pip install \
    --platform manylinux2014_x86_64 \
    --target=./venv/lib/python3.9/site-packages \
    --implementation cp \
    --python 3.9 \
    --only-binary=:all: --upgrade \
    -r requirements.txt 

# if the numpy failed the installation, try to run the commented command below 
# pip install -r requirements.txt --force-reinstall

# cd venv/Lib/site-packages/
cd ./venv/lib/python3.9/site-packages/

zip -r9 ../../../../function.zip .

cd ../../../../

zip -g ./function.zip -r app