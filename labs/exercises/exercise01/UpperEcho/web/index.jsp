<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Echo Test</title>
    </head>
    <body>
        <h1>Echo Test</h1>
        <c:if test="${requestScope.error != null}">
		    <!-- lab: 改用 CSS -->
            <font color ="red" size = "10"><b><i>${error}</i></b></font><br><br>
        </c:if>
		
		<!-- lab: 在此建立基本的表單 -->
    </body>
</html>
