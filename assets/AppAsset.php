<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/main.css',
        'css/colorRibbon.css'
    ];
    public $js = [
        'js/js_init.js',
        'js/menu.js',
        'js/chapterName.js',
        'js/chapters.js',
        'js/fontSize.js',
        'js/formTabs.js',
        'js/galleries.js',
        'js/colorRibbon.js',
        'js/thumbAnimations.js'

    ];
    public $depends = [
        'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
