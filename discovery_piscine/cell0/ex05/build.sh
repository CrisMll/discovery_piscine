if [ $# -eq 0 ]; then
	echo "Por favor, dame nombres para las carpetas a crear"
fi
for dir in "$@"; do
	mkdir "ex${dir}"
	echo "carpeta creada: ex${dir}"
done
exit 0
