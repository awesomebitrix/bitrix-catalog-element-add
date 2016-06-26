# mospans:catalog.element.add

Компонент 1С-Битрикс для добавления элементов каталога и торговых предложений.

Установка
---
Скопируйте пространство имен 'mospans' в папку /bitrix/components/.

Использование
---
Необходимо создать страницы для каждого торгового каталога. Т.е. если есть один инфоблок с каталогом и один - с торговыми предложениями, то нужно создать две страницы для каждого инфоблока.
При создании страниц в административной панели воспользуйтесь компонентом дежащим тут: Контент -> Добавление элементов -> Добавление элементов каталога.
При работе вне административной панели используйте $APPLICATION->IncludeComponent('mospans:catalog.element.add', ...);
Например:
	<?$APPLICATION->IncludeComponent(
		"mospans:catalog.element.add",
		"",
		Array(
			"AJAX_MODE" => "N",
			"AJAX_OPTION_ADDITIONAL" => "",
			"AJAX_OPTION_HISTORY" => "N",
			"AJAX_OPTION_JUMP" => "N",
			"AJAX_OPTION_STYLE" => "Y",
			"ALLOW_DELETE" => "Y",
			"ALLOW_EDIT" => "Y",
			"CUSTOM_TITLE_CODE" => "",
			"CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
			"CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
			"CUSTOM_TITLE_DETAIL_PICTURE" => "",
			"CUSTOM_TITLE_DETAIL_TEXT" => "",
			"CUSTOM_TITLE_IBLOCK_SECTION" => "",
			"CUSTOM_TITLE_NAME" => "",
			"CUSTOM_TITLE_PREVIEW_PICTURE" => "",
			"CUSTOM_TITLE_PREVIEW_TEXT" => "",
			"CUSTOM_TITLE_TAGS" => "",
			"DEFAULT_INPUT_SIZE" => "30",
			"DETAIL_TEXT_USE_HTML_EDITOR" => "N",
			"ELEMENT_ASSOC" => "CREATED_BY",
			"GROUPS" => array("1"),
			"IBLOCK_ID" => "2",
			"IBLOCK_TYPE" => "catalog",
			"LEVEL_LAST" => "Y",
			"MAX_FILE_SIZE" => "0",
			"MAX_LEVELS" => "100000",
			"MAX_USER_ENTRIES" => "100000",
			"NAV_ON_PAGE" => "10",
			"PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
			"PROPERTY_CODES" => array("2","3","4","5","6","7","8","9","10","11","12","13","15","16","17","18","19","20","21","NAME","CODE","TAGS","DATE_ACTIVE_FROM","DATE_ACTIVE_TO","IBLOCK_SECTION","PREVIEW_TEXT","PREVIEW_PICTURE","DETAIL_TEXT","DETAIL_PICTURE"),
			"PROPERTY_CODES_REQUIRED" => array(),
			"RESIZE_IMAGES" => "N",
			"SEF_MODE" => "N",
			"STATUS" => "ANY",
			"STATUS_NEW" => "N",
			"USER_MESSAGE_ADD" => "",
			"USER_MESSAGE_EDIT" => "",
			"USE_CAPTCHA" => "N"
		)
	);?>
