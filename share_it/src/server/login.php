<?php

    session_start();

    var_dump($_SESSION);

    $_SESSION[] = isset($_GET[])?$_GET[]:"pas d'utilisateur";