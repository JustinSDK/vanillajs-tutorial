<%@page contentType="text/html" pageEncoding="UTF-8"%><%
    String result = null;
    switch(request.getParameter("url")) {
        case "http://caterpillar.onlyfun.net":
            result = "urlExisted";
            break;
        case "http://openhome.cc":
            result = "urlExisted";
            break;
        default:
            result = "";
    }
    out.print(result);
%>