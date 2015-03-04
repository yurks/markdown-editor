<?php
class MarkdownEditorProcessContentProcessor extends modProcessor {

    public function process()
    {
        $resource = $this->getProperty('resource');
        $resource = $this->modx->getObject('modResource', $resource);

        $currentResource = $this->modx->resource;
        $currentResourceIdentifier = $this->modx->resourceIdentifier;
        $currentElementCache = $this->modx->elementCache;

        $maxIterations = (integer) $this->modx->getOption('max_iterations', null, 10);
        $this->modx->resource = $resource;
        $this->modx->resourceIdentifier = $resource->get('id');
        $this->modx->elementCache = array();
        $resourceOutput = $this->getProperty('content');

        $this->modx->getParser()->processElementTags('', $resourceOutput, true, false, '[[', ']]', array(), $maxIterations);
        $this->modx->getParser()->processElementTags('', $resourceOutput, true, true, '[[', ']]', array(), $maxIterations);

        $this->modx->elementCache = $currentElementCache;
        $this->modx->resourceIdentifier = $currentResourceIdentifier;
        $this->modx->resource = $currentResource;


        return $this->modx->toJSON(array('success' => true, 'data' => $resourceOutput));
    }
}
return 'MarkdownEditorProcessContentProcessor';