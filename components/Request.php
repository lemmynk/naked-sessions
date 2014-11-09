<?php
/**
 * Created by PhpStorm.
 * User: miller
 * Date: 11/9/14
 * Time: 3:34 PM
 */

namespace app\components;


class Request extends \yii\web\Request
{
    public $web;
    public $adminUrl;

    public function getBaseUrl()
    {
        return str_replace($this->web, "", parent::getBaseUrl()) . $this->adminUrl;
    }

    public function resolvePathInfo()
    {
        if($this->getUrl() === $this->adminUrl){
            return "";
        }else{
            return parent::resolvePathInfo();
        }
    }
}