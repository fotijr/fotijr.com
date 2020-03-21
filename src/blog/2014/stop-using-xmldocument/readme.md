---
title: Stop Using XMLDocument
lang: en-US
published: 2014-07-06
layout: BlogLayout
meta:
  - name: keywords
    content: csharp dotnet
  - name: description
    content: When working with XML documents in .NET, stop using XMLDocument and instead use XDocument.
---

Most of the data I work with in my daily job comes from databases. However, occasionally tasks pop up involving other sources, or I’ll have the need to create something more temporary or easily transferable.

Recently I needed to create a temporary log that I knew would make the most sense in an XML file. I’ve done some work in the past with XML files, and XMLDocument has always gotten the job done. But as I started coding, it felt way too cumbersome to accomplish what I was trying to do. I knew my apporach was likely incorrect, so… to the internet! My initial research turned up many articles on XMLDocument, but they were a bit dated. After reading several more recent Stack Overflow questions, I realized I should have been using [XDocument](https://docs.microsoft.com/en-us/dotnet/api/system.xml.linq.xdocument).

## Scenario
For example’s sake, let’s say you want to store purchase orders in an XML file. When a new order is added, an XML node will be added to the document. The order total will also need to be updated whenever the order is modified.

A purchase order:
```csharp
class PurchaseOrder
{
  public int OrderId { get; set; }
  public decimal TotalCost { get; set; }
  private string _xmlPath;
}
```
Here’s the code to save a purchase order. If the XML file doesn’t exist, it will be created. If the file does exist, we’ll use LINQ to see if the purchase order is already in the file. If it is, the total cost and last updated values will be updated. If it doesn’t already exist in the file, a new node will be created. The code could be cleaned up to have adding a new node in a separate function, but it’s good enough to demo the functionality of XDocument.
```
public void Save()
{
  if (!File.Exists(_xmlPath))
  {
    // if XML file doesn't exist, create one
    var doc = new XDocument(
      new XDeclaration("1.0", "utf-8", "yes"),
      new XElement("orders",
        new XElement("order",
          new XAttribute("id", this.OrderId),
          new XAttribute("total", this.TotalCost),
          new XAttribute("lastUpdated", DateTime.Now)
      ))
    );
    doc.Save(_xmlPath);
  }
  else
  {
    // if XML file already exists, see if order already exists
    XDocument xHistory = XDocument.Load(_xmlPath);
    XElement currentOrder = (from el in xHistory.Elements("orders").Elements("order")
                             where el.Attribute("id").Value == this.OrderId
                             select el).FirstOrDefault();
    if (currentOrder != null)
    {
     currentOrder.Attribute("total").SetValue(this.TotalCost);                   
     currentOrder.Attribute("lastUpdated").SetValue(DateTime.Now);
    }
    else
    {
      // write new node
      if (xHistory.Element("orders") == null)
      {
          throw new ApplicationException("Something doesn’t look right in the XML file...");
      }
      xHistory.Element("orders").Add(  new XElement("order",
        new XAttribute("id", this.OrderId),
        new XAttribute("total", this.TotalCost),
        new XAttribute("lastUpdated", DateTime.Now)
       ));
    }
    xHistory.Save(_xmlPath);
  }
}
```

## Summary
XDocument is easy to work with, and much cleaner than XMLDocument. It is also much more powerful, exposing your data to the power of LINQ. When you find yourself working with XML documents, don’t make my initial mistake and be stuck in 2006 using XMLDocument… Use XDocument.