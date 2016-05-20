<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <script type="text/javascript" src="js/lib.js"></script>
        <title>Echo Test</title>
    </head>
    <body>
        <h1>Echo Test</h1>
        <c:if test="${requestScope.error != null}">
            <span class="highlight">${error}</span><br><br>
        </c:if>
        <form name="form1" action="UpperEcho" method="get">
            Text: <input type="text" name="text"><br><br>
            <div id="console"></div><br>    
            <input type="submit">
        </form>
    </body>
</html>
