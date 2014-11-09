<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\helpers\Url;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body id="bodymain">

<?php $this->beginBody() ?>
    <div id="site-container">
        <div id="site-transparent-skin"></div><!-- site-transparent-skin-->
        <div id="site-body">
            <div id="header-container">
                <div class="header-links menu" id="index">
                    <img src="web/css/ico_home.png">
                    <img src="web/css/ico_home_green.png">
                    <a href=<?= Url::to(['index']) ?> tabindex="0"></a>
                </div>
                <div class="header-links menu">
                    <img src="web/css/ico_content.png">
                    <img src="web/css/ico_content_green.png">
                    <a href="#" tabindex="0"></a>
                </div>
                <div class="header-links menu">
                    <img src="web/css/ico_com.png">
                    <img src="web/css/ico_com_green.png">
                    <a href="#" tabindex="0"></a>
                </div>
                <div class="header-links menu">
                    <img src="web/css/ico_about.png">
                    <img src="web/css/ico_about_green.png">
                    <a href="#" tabindex="0"></a>
                </div>
                <div class="header-links">
                    <img src="web/css/ico_log_red.png" data-exit="no-exit">
                    <img src="web/css/ico_log2.png">
                    <!--<a href="log.php"></a>-->
                </div>
            </div>
            <div id="body-container">
                <div id="body-php">
                    <?= $content ?>
                </div><!-- body-php-->
            </div><!-- body-container-->

            <div id="footer-container">
                <div class="colorRibbon">
                    <div class="color" id="bellow">
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                    </div>
                    <div class="color" id="above">
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                        <div class="parts"></div><div class="parts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="story-container">
        <div id="story-img-container"></div>
        <div id="story-controls">
            <!--<div id="controls-top"></div>-->
            <div id="controls-left">
                <div class="switches" id="controls-left-switch"></div>
            </div>
            <div id="controls-right">
                <div id="controls-exit"></div>
                <div class="switches" id="controls-right-switch"></div>
            </div>
        </div>
    </div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
