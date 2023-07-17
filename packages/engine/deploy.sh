if [ "$1" = "pre-deploy" ]; then
  cd "$RESOURCE_DIR"
  echo "Cloud Functions pre-deploy script: Packing shared code..."
  rm -rf .temp
  mkdir ./.temp
  npm pack --workspace @recap/shared --pack-destination ./.temp
  npm pkg set 'dependencies.@recap/shared'='file:./.temp/recap-shared-0.0.0.tgz'
  echo "Cloud Functions pre-deploy script: Done!"
  exit
elif [ "$1" = "post-deploy" ]; then
  cd "$RESOURCE_DIR"
  echo "Cloud Functions post-deploy script: Cleaning up shared code..."
  npm pkg set 'dependencies.@recap/shared'='0.0.0'
  rm -rf .temp
  echo "Cloud Functions post-deploy script: Done!"
  exit
else
  echo "Not a valid parameter. Must be one of: 'pre-deploy'|'post-deploy'."
  exit
fi