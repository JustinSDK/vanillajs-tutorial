<%@page contentType="application/json" pageEncoding="UTF-8" import="java.util.*" %><%
    String[] keywords = {"caterpillar", "car", "ceo", "c++", "justin", "java", "javascript"};
    List<String> results = new ArrayList<>();
    
    String keyword = request.getParameter("keyword");
    
    for(String k : keywords) {
        if(k.startsWith(keyword)) {
            results.add(k);
        }
    }
    
    String json = "[";
    for(String k : results) {
        json += ("\"" + k + "\",");
    }
    out.println(json.substring(0, json.lastIndexOf(",")) + "]");
%>