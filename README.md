# Lottoziehung

In dieser Aufgabe soll eine Lottoziehung mit Test-Driven Development (TDD) im Pair Programming umgesetzt werden.

Im Schweizer Zahlenlotto werden sechs Zahlen von 1 bis 42 und eine Zusatzzahl von 1 bis 6 gezogen. Der Spieler kann einen entsprechenden Tipp abgeben.

Die Datenstruktur `Draft` repräsentiert eine Lottiziehung und ist in der Datei `src/lottery.ts` bereits vorgegeben.

Die folgenden beiden Funktionen sollen im Pair Programming gemäss TDD-Vorgehen (mit Tests in `src/lottery.test.ts`) umgesetzt werden:

1. `drawLottery`: Diese Funktion implementiert eine Lottoziehung. Da Zufallszahlen gezogen werden, kann der Unittest nicht auf bestimmte Werte, sondern bloss auf _Wertebereiche_ prüfen, und darauf, dass die Zahlen unterschiedlich sind.
2. `betInLottery`: Diese Funktion implementiert die Auswertung einer Lottoziehung. Die gezogenen Zahlen und Tipp des Spielers werden ihr übergeben, und als Rückgabewert soll eine Zeichenkette wie z.B. `"0"` (kein Treffer), `"2+"` (zwei Treffer und korrekte Zufallszahl) oder `"3"` (drei Treffer) zurückgegeben werden. Hierzu sind verschiedene Testfälle zu entwickeln.

Die Zahlen einer Ziehung und eines Tipps müssen eindeutig sein und im vorgegebenen Wertebereich liegen. Auf ungültige Werte soll mit einer entsprechenden (und zu testenden) Ausnahme reagiert werden.
